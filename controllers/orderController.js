const Order = require("../models/order");

const orderController = {
  createOne: async (req, res) => {
    try {
      const order = await Order.create(req.body);
      res.status(201).json({ msg: "Resource created!", data: order });
    } catch (err) {
      console.error(err);
      res.status(400).json({ msg: "There's an error" });
    }
  },
};
module.exports = orderController;
