import mongoose from "mongoose";
import { db_url } from "../config/config";

mongoose.set("strictQuery", false)

const ConnectDB = async () => {
  const DB_URL = db_url

  try {
    await mongoose.connect(DB_URL);
  } catch (error) {
    console.log(error);
  }
};

export { ConnectDB }