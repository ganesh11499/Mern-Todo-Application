import express from "express";

import cors from "cors";

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
import Routes from "./route/route.js";

console.log(process.env.DATABASE);
const DB = process.env.DATABASE
mongoose.connect(DB).then((con) => console.log("DB connected"));
console.log(DB)
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/", Routes);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
