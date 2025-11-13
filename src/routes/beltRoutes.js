import express from "express";
import Belt from "../models/Belt.js";
const router = express.Router();

// Save belt
router.post("/add-belt", async (req, res) => {
  try {
    const { teamMember, macAddress, serialNumber, beltSize, assignedTo } = req.body;

    const belt = new Belt({ teamMember, macAddress, serialNumber, beltSize, assignedTo });
    await belt.save();

    res.json({ success: true, message: "Belt saved successfully", belt });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// Get all scanned belts (optionally filter by hospital)
router.get("/belts", async (req, res) => {
  const { assignedTo, beltSize } = req.query;
  const filter = {};
  if (assignedTo) filter.assignedTo = assignedTo;
  if (beltSize) filter.beltSize = beltSize;

  const belts = await Belt.find(filter).sort({ createdAt: -1 });
  res.json(belts);
});

// Get available sizes
router.get("/belt-sizes", (req, res) => {
  res.json({ beltSizes: ["32", "34", "36", "38", "40", "42", "44" , "46"] });
});

export default router;
