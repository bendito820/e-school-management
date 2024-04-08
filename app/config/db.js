// const mongoose = require("mongoose");

import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const DBconnection = async () => {
  const conn = await mongoose
    .connect(`mongodb://0.0.0.0/e-school-app`)
    .catch((err) => {
      console.log(`For some reasons we couldn't connect to the DB`, err);
    });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = DBconnection;
