const Order = require("../models/order");
const sendMsg = require("../utils/msg");

const orderController = {
  createOne: async (req, res) => {
    try {
      const order = await Order.create(req.body);
      await res.status(201).json({ msg: "Resource created!", data: order });

      const { orderId, cartTotal, number } = order;
      // Send transaction
      sendMsg(orderId, cartTotal, number);
    } catch (err) {
      console.error(err);
      res.status(400).json({ msg: "There's an error" });
    }
  },
};
module.exports = orderController;
