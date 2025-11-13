import mongoose from "mongoose";

const teamMembers = ["Mukul", "Ayush", "Happy", "Abhi", "Piyush"];
const beltSizes = ["S", "M", "L", "XL" , "XXL"]; // optional enum

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
      enum: beltSizes, // comment this line if you want free text
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
