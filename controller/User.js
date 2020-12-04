const express = require("express");
const UserModel = require("../model/User");

let router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    const user = new UserModel(req.body);
    const result = await user.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
});

router.post("/login", async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await UserModel.find({ phone });
    if (user.password !== password && user == null)
      throw Error("Password incorrect");
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
