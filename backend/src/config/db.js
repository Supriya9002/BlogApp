import mongoose from "mongoose";
// import "../../env.js";
import dotenv from "dotenv"
dotenv.config();

// const url = process.env.DB_URL || "mongodb://localhost:27017/Bloger";
const url = process.env.DB_URL;
console.log(url)

// console.log("DB_URL",process.env.DB_URL);
const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Mongodb connected using mongoose");
    //addCategory();
  } catch (err) {
    console.log("Error while connecting to db");
    console.log(err);
  }
};

export default connectUsingMongoose;
