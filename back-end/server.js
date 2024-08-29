import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./db/db.js";
import cardRoute from "./routes/cardRoute.js";
import morgan from "morgan";
import cors from "cors";
const app = express();

dotenv.config();
connectDb();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/cards", cardRoute);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
