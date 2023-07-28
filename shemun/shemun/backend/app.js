const express = require("express");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

const app = express();
app.use(express.json());
app.use(cookieParser());
// route imports
app.use(bodyparser.json());

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Middleware for Errors

app.use(errorMiddleware);
module.exports = app;
