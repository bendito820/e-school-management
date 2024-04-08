const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const SubjectSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    classeId: {
      type: Schema.ObjectId,
      ref: "Classe",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Subject", SubjectSchema);
