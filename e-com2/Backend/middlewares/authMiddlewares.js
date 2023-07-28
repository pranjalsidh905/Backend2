const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddlewares = asyncHandler(async (req, res, next) => {
  let token;
  // console.log("request",req?.headers?.authorization?.startsWith("Bearer"))
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    // console.log(headers);
    try {
      if (token) {
        const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET // secret key for signing JWTs
        );
        console.log(decoded);
        // req.userId = decodedToken._id;
      }
      // return next();
    } catch (error) {
      //   console.log(`Error in verifying the token ${error}`);
      throw new Error("Not Authorized expired, Please Login agian ");
      // return res.status(403).send({ message: `Invalid or expired token` });
    }
  } else {
    throw new Error("There is no token attached to header");
  }
});
module.exports = { authMiddlewares };
