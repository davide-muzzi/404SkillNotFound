const bcrypt = require("bcrypt");

const users = [
  {
    id: 1,
    email: "admin@example.com",
    passwordHash: bcrypt.hashSync("adminpass", 10),
    role: "admin",
  },
  {
    id: 2,
    email: "user@example.com",
    passwordHash: bcrypt.hashSync("userpass", 10),
    role: "user",
  },
];

module.exports = users;
