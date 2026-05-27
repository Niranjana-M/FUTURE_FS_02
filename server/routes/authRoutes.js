const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // YOUR LOGIN DETAILS (you can change this)
  const adminEmail = "admin@gmail.com";
  const adminPassword = "123456";

  if (email === adminEmail && password === adminPassword) {
    res.json({
      message: "Login successful",
      user: {
        name: "Admin",
        email: adminEmail
      }
    });
  } else {
    res.status(401).json({
      message: "Invalid credentials"
    });
  }
});

module.exports = router;