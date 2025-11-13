import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import beltRoutes from "./src/routes/beltRoutes.js";

dotenv.config();
const app = express();
       
app.use(cors({
  origin: '*',  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));  

app.use(express.json());
 
connectDB();  

app.use("/api/belts", beltRoutes);

app.get("/", (req, res) => res.send("Belt Scanner API Running ✅"));

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
); 
 