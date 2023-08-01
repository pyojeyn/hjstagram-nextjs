import mongoose from "mongoose";

const connection = {};

const url = "mongodb://localhost:27017/hjstagram";
const options = { useNewUrlParser: true };

async function dbConnect() {
  if (connection.isConnected) {
    // 이미 연결되어 있는 경우에는 다시 연결하지 않음
    return;
  }

  const db = await mongoose.connect(url, options);
  connection.isConnected = db.connections[0].readyState;
}

async function dbClose() {
  if (connection.isConnected) {
    await mongoose.connection.close();
    connection.isConnected = false;
  }
}

export { dbConnect, dbClose };
