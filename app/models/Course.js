// const mongoose = require("mongoose");
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CourseSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Correct export statement without redefining Course
// Do not use assignment in the export statement
const Course = mongoose.models.Course || model("Course", CourseSchema);
export default Course;
