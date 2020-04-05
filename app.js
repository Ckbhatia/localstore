const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const orderRouter = require("./routes/order");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV !== "production") require("dotenv").config();

// Connecting With DataBase
mongoose.connect(
  process.env.DB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("DB connected");
    }
  }
);

mongoose.set("useCreateIndex", true);

app.use("/api/v1/order", cors(), orderRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
