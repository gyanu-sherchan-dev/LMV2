import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URI;
export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_URL);
    connect && console.log("Mongo connected");
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
