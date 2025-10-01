const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  let user = await UserModel.findOne({ email });
  if (user) {
    return res.status(400).json({ error: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await UserModel.create({ email, password: hashedPassword });

  //https://jwt.io
  let token = jwt.sign({ email, id: newUser._id }, process.env.JWT_SECRET_KEY);

  return res.status(200).json({ token, user: newUser });
};
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  let user = await UserModel.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    let token = jwt.sign({ email, id: user._id }, process.env.JWT_SECRET_KEY);
    return res.status(200).json({ token, user });
  } else {
    return res.status(400).json({ error: "Invalid Credentials" });
  }
};
const getUser = async (req, res) => {
  const user = await UserModel.findById(req.params.id);
  res.json({ email: user.email });
};

module.exports = {
  userSignUp,
  userLogin,
  getUser,
};
