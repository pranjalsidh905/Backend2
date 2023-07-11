const { default: mongoose } = require("mongoose");
const dbConnect = () => {
  try {
    const conn = mongoose.connect(
      "mongodb+srv://sidhpranjal905:fGCA8Vx5Mhs1XJiw@pranjal.xpskej1.mongodb.net/digitic?retryWrites=true&w=majority" ,{
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      }
    );
    console.log("Database Connected successfully");
  } catch (error) {
    console.log("Database error");
  }
};
module.exports = dbConnect;
