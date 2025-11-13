import express from "express";
import Belt from "../models/Belt.js";
const router = express.Router();

// Save belt
router.post("/add-belt", async (req, res) => {
  try {
    const { teamMember, macAddress, serialNumber, beltSize } = req.body;

    const belt = new Belt({ teamMember, macAddress, serialNumber, beltSize });
    await belt.save();

    res.json({ success: true, message: "Belt saved successfully", belt });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Get all scanned belts
router.get("/belts", async (req, res) => {
  const belts = await Belt.find().sort({ createdAt: -1 });
  res.json(belts);
});

export default router;
