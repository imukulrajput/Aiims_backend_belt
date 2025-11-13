import mongoose from "mongoose";

const teamMembers = ["Mukul", "Ayush", "Happy", "Abhi", "Piyush"];
const beltSizes = ["32", "34", "36", "38", "40", "42", "44" , "46"]; // numeric sizes as strings

const BeltSchema = new mongoose.Schema(
  {
    teamMember: {
      type: String,
      enum: teamMembers,
      required: true,
    },
    macAddress: {
      type: String,
      required: true,
      unique: true,
    },
    serialNumber: {
      type: String,
      required: true,
      unique: true,
    },
    beltSize: {
      type: String,
      enum: beltSizes,
      required: true,
    },
    assignedTo: {
      type: String,
      default: "AIIMS",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Belt", BeltSchema);
export { teamMembers, beltSizes };
