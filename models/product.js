const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    id: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discount: String,
    seller: String,
    quantity: { type: Number, required: true },
    tags: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
