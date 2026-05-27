const express = require("express");
const router = express.Router();

// SIMPLE LOGIN (NO DATABASE)
router.post("/login", (req, res) => {
  res.json({
    message: "Login successful",
    user: {
      name: "Admin"
    }
  });
});

module.exports = router;