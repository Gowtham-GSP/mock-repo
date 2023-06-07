const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db conected ");
  } catch (error) {
    console.log(error);
  }
};
db();
module.exports = db;
