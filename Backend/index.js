import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

// call database connection here
connectDB();
const app = express();
const _dirname = path.resolve();
const PORT = process.env.PORT || 3000;


app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running ✅");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});