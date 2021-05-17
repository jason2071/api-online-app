const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  facebook: {
    type: String,
  },
  google: {
    type: String,
  },
  line: {
    type: String,
  },
  avatar: {
    type: String,
  },
  level: {
    type: "String",
    default: "m",
    enum: ["a", "m"],
  },
  token: {
    type: String,
    required: true,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
