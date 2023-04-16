import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();




const connection = process.env.DATABASE.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );
  mongoose.connect(connection).then((con) => console.log("DB connected"));


export default connection;