import mongoose from "mongoose";

const { Schema, model } = mongoose;

const OwnerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  passportId: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Owner = mongoose.models.Owner || model("Owner", OwnerSchema);

export default Owner;
