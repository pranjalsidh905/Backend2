const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");
// const User = require("../models/userModel");
// console.log(">>>>>>>>>>>>>>>>>.user",User);

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  console.log(">>>>>>>>>>>>>>>>>req.body", req.body);
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    // Create a new user
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(">>>>>>>>>>>>>req.body", req.body);

  //Check if user exists or not

  const findUser = await User.findOne({ email });
  console.log(">>>>>>>>>>>>>findUser>>>>>>>>>>>>>>", findUser);
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const token = generateToken(findUser?._id);
    console.log(">>>>>>>>>>>>>>>token", token);
    res.json({
      _id: findUser?._id,
      findname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token,
    });
  } else {
    throw new Error("Invalid Credentials");
  }
  // console.log(email, password);
  // console.log(">>>>>>>>>>>>>>>>>>>>>req.body", req.body);
});

// updatea a user
const updatedUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});
// Get all users
const getallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

//Get a Single user
const deleteaUser = asyncHandler(async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const  deleteaUser = await User.findByIdAndDelete(id);
    res.json({ deleteaUser });
  } catch (error) {
    throw new Error(error);
  }
  console.log(id);
});
module.exports = {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
};
