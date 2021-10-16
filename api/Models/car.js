const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: String,
  unit: String,
  image: String
});

module.exports = mongoose.model("Car", carSchema);