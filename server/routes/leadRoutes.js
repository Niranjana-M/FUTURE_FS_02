const express = require("express");
const router = express.Router();

const Lead = require("../models/Lead");

router.get("/", async (req, res) => {
  try {
    const leads = await Lead.find();

    res.json(leads);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/add", async (req, res) => {
  try {
    const newLead = new Lead(req.body);

    await newLead.save();

    res.json(newLead);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedLead =
      await Lead.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(updatedLead);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Lead.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Lead deleted",
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;