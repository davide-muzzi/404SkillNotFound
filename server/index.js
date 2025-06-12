const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;
const SECRET = "supersecretkey";

// 💾 File paths
const USERS_FILE = path.join(__dirname, "data", "users.json");
const ACCEPTED_FILE = path.join(__dirname, "data", "accepted_submissions.json");

// 📄 JSON Utilities
function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return [];
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// 📦 Data loading
const users = readJson(USERS_FILE);
const submissions = [];
const acceptedSubmissions = readJson(ACCEPTED_FILE);

// 📁 Upload-Storage konfigurieren
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Medienzugriff via URL

/* -------------------- LOGIN -------------------- */
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ message: "User not found" });

  const valid = bcrypt.compareSync(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign({ id: user.id, role: user.role }, SECRET, {
    expiresIn: "1h",
  });

  res.json({ token, role: user.role });
});

/* -------------------- REGISTER -------------------- */
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Missing data" });

  const exists = users.find((u) => u.email === email);
  if (exists) return res.status(409).json({ message: "User already exists" });

  const passwordHash = bcrypt.hashSync(password, 10);
  users.push({ id: Date.now(), email, passwordHash, role: "user" });
  writeJson(USERS_FILE, users); // 💾 Save user to JSON

  res.json({ message: "User registered successfully" });
});

/* -------------------- SUBMISSIONS -------------------- */
app.post("/api/submit", upload.single("file"), (req, res) => {
  const { title, description, type } = req.body;
  const file = req.file;

  if (!title || !description || !type || !file)
    return res.status(400).json({ message: "Missing fields" });

  const mediaUrl = `http://localhost:${PORT}/uploads/${file.filename}`;

  const submission = {
    id: Date.now(),
    title,
    description,
    mediaUrl,
    type,
    status: "pending",
  };

  submissions.push(submission);
  res.json({ message: "Submission with file received", submission });
});

app.post("/api/submit-url", (req, res) => {
  const { title, description, mediaUrl, type } = req.body;
  if (!title || !description || !mediaUrl || !type)
    return res.status(400).json({ message: "Missing fields" });

  const submission = {
    id: Date.now(),
    title,
    description,
    mediaUrl,
    type,
    status: "pending",
  };

  submissions.push(submission);
  res.json({ message: "Submission with URL received", submission });
});

app.get("/api/submissions", (req, res) => {
  res.json(submissions.filter((s) => s.status === "pending"));
});

app.get("/api/accepted", (req, res) => {
  res.json(acceptedSubmissions);
});

app.post("/api/submissions/:id/accept", (req, res) => {
  const submission = submissions.find((s) => s.id == req.params.id);
  if (!submission) return res.status(404).json({ message: "Not found" });

  submission.status = "accepted";
  acceptedSubmissions.push(submission);
  writeJson(ACCEPTED_FILE, acceptedSubmissions); 

  res.json({ message: "Accepted", submission });
});

app.post("/api/submissions/:id/reject", (req, res) => {
  const index = submissions.findIndex((s) => s.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Not found" });

  submissions.splice(index, 1);
  res.json({ message: "Rejected and removed" });
});

/* ----------------------- Contact ----------------------- */
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res.status(400).json({ message: "Missing fields" });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "gregoryruoss@gmail.com",
      subject: "Neue Kontaktanfrage",
      text: `${message}\n\nVon: ${name} <${email}>`,
    });

    res.json({ message: "E-Mail erfolgreich gesendet" });
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    res.status(500).json({ message: "Fehler beim Senden der E-Mail" });
  }
});

/* -------------------- START SERVER -------------------- */
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
