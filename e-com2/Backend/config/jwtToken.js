const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  // console.log(">>>>>>>>>>>>>process.env.JWT_SECRET", process.env.JWT_SECRET);
  // console.log(">>>>>>>>>>>>>>>>>>>>>>>process.env", process.env);
  return jwt.sign({ id }, "abcd", { expiresIn: "5d" });
};
module.exports = { generateToken };
