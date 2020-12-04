const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema({
  name: String,
  password: String,
  email: String,
  phone: String,
});

const news = mongoose.model("users", userSchema);

module.exports = news;
