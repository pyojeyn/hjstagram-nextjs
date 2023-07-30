// import { MongoClient } from "mongodb";

// let connectDB;

// connectDB = await new MongoClient(url, options).connect();

// export { connectDB };

import mongoose from "mongoose";

const url = "mongodb://localhost:27017/hjstagram";
const options = { useNewUrlParser: true };

//MongoDB 연결
mongoose
  .connect(url, options)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error(e);
  });
