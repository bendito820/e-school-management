const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const TeacherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    groupId: {
      type: Schema.ObjectId,
      ref: "Group",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Teacher || model("Teacher", TeacherSchema);
