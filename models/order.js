const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    orderId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    number: { type: String, required: true },
    address: { type: String, required: true },
    alternate: String,
    landmark: String,
    additional: String,
    cart: Array,
    delivery: Number,
    cartSubTotal: Number,
    cartTotal: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
