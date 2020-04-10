// Not to require dotenv in production mode
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const msg91 = require("msg91")(
  process.env.MSG_API_KEY,
  process.env.SENDER_ID,
  process.env.ROUTE_NO
);

const sendMsg = async (orderId, cartTotal, number) => {
  const message = `Order Placed: Your order ID ${orderId} amounting to Rs ${cartTotal} has been received. You can expect delivery by next day morning. Thanks`;
  try {
    const res = await msg91.send(number, message);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendMsg;
