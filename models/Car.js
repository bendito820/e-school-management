import { Schema, model, models } from "mongoose";

const CarSchema = new Schema({
  ownerId: {
    type: Schema.ObjectId,
    ref: "Owner",
    required: true,
  },
  NumberPlate: {
    type: String,
    required: true,
  },
  carBrand: {
    type: String,
    required: true,
  },
  carId: {
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
  currentMiles: {
    type: String,
    required: true,
  },
});



const Car = models.Car || model("Car", CarSchema);

export default Car;