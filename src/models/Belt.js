import mongoose from "mongoose";

const teamMembers = ["Mukul", "Ayush", "Happy", "Abhi", "Piyush"];
const beltSizes = ["32", "34", "36", "38", "40", "42", "44" , "46"];

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
      type: String,  // can be AIIMS, Fortis, Apollo, etc.
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Belt", BeltSchema);
export { teamMembers, beltSizes };
