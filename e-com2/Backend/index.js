const express = require("express");
const dbConnect = require("./config/dbconnect");
const app = express();
const dotenv = require("dotenv").config();
dbConnect();
const PORT = process.env.PORT || 5000;
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const { notfound, errorHandler } = require("./middlewares/errorHandler");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/api/user", authRouter);
app.use(notfound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
