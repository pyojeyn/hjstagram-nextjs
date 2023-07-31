import mongoose from "mongoose";

const connection = {};

const url = "mongodb://localhost:27017/hjstagram";
const options = { useNewUrlParser: true };

async function dbConnect() {
  const db = await mongoose.connect(url);
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
