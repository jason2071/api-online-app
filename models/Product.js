const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Product = mongoose.model("product", ProductSchema);
