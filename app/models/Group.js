const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const GroupSchema = new Schema(
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
    students: [
      {
        type: Schema.ObjectId,
        ref: "Student",
      },
    ],
  },
  { timestamps: true }
);
const Group = mongoose.models.Group || model("Group", GroupSchema);
export default Group;
