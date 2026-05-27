const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");

app.use(express.json()); // VERY IMPORTANT

app.use("/", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});