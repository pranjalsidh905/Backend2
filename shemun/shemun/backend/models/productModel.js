const mongoose = require("mongoose");
// const validator = require("validator");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "PLease Enter product Name"],
    trim: true,
  },

  description: {
    type: String,
    required: [true, "please Enter product Descripation"],
  },

  price: {
    type: Number,
    required: [true, "please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },

  ratings: {
    type: Number,
    default: 0,
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },

      url: {
        type: String,
        required: true,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },

  Stock: {
    type: Number,
    required: [true, "Please Enter Product Stock "],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },

  numOfReviews: {
    type: Number,
    default: 0,
  },

  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },

      name: {
        type: String,
        required: true,
      },

      rating: {
        type: Number,
        required: true,
      },

      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", productSchema);
