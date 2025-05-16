const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const users = require('./users');

const app = express();
const PORT = 3000;
const SECRET = 'supersecretkey';

app.use(cors());
app.use(express.json());

// POST /api/login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (!user) return res.status(401).json({ message: 'User not found' });

  const valid = bcrypt.compareSync(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: 'Wrong password' });

  const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: '1h' });
  res.json({ token, role: user.role });
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
