const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ClasseSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    courseId: {
      type: Schema.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  { timestamps: true }
);

const Classe = mongoose.models.Classe || model("Classe", ClasseSchema);

export default Classe;
