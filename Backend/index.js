import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import cookieParser from "cookie-parser";
import path from "path";
import authRoutes from "./routes/authRoutes.js";
import invoiceRoutes from "./routes/invoiceRoutes.js";

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

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/invoice", invoiceRoutes);

app.get("/", (req, res) => {
  res.send("API is running ✅");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});