import mongoose from "mongoose";

const teamMembers = ["Mukul", "Ayush", "Happy", "Abhi" , "Piyush"]; 

const BeltSchema = new mongoose.Schema({
  teamMember: {
    type: String,
    enum: teamMembers,
    required: true
  },
  macAddress: {
    type: String,
    required: true,
    unique: true
  },
  serialNumber: {
    type: String,
    required: true,
    unique: true
  },
  assignedTo: {
    type: String,
    default: "AIIMS"
  }
}, { timestamps: true });

export default mongoose.model("Belt", BeltSchema);
export { teamMembers };
