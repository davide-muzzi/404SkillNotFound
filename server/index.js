const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const users = require("./users");

const app = express();
const PORT = 3000;
const SECRET = "supersecretkey";

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Received email:", email);
  console.log("Received Password:", password);
  console.log(
    "Registered users:",
    users.map((u) => u.email)
  );

  const user = users.find((u) => u.email === email);
  if (!user) {
    console.log("→ User not found");
    return res.status(401).json({ message: "User not found" });
  }

  const valid = bcrypt.compareSync(password, user.passwordHash);
  console.log("→ Password valid?", valid);

  if (!valid) {
    return res.status(401).json({ message: "Give Valid Login" });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, SECRET, {
    expiresIn: "1h",
  });
  console.log("→ Login successful:", user.email);
  res.json({ token, role: user.role });
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
