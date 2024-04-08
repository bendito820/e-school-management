const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const TeacherSchema = new Schema(
  {
    p1: {
      type: Number,
    },
    p2: {
      type: Number,
    },
    mac: {
      type: Number,
    },
    studentId: {
      type: Schema.ObjectId,
      ref: "Subject",
      required: true,
    },
    groupId: {
      type: Schema.ObjectId,
      ref: "Group",
      required: true,
    },
    subjectId: {
      type: Schema.ObjectId,
      ref: "Subject",
      required: true,
    },
    teacherId: {
      type: Schema.ObjectId,
      ref: "Subject",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Teacher", TeacherSchema);
