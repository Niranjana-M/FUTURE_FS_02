const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("LOGIN:", email, password);

  if (email === "admin@gmail.com" && password === "123456") {
    return res.json({
      message: "Login successful",
      user: {
        name: "Admin",
      },
    });
  }

  return res.status(401).json({
    message: "Invalid credentials",
  });
});

module.exports = router;