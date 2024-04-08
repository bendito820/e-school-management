import { model, Schema, models } from "mongoose";

const DriverSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  licence: {
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
  phoneNumber: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  currentCountry: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

const Driver = models.Driver || model("Driver", DriverSchema);

export default Driver;
