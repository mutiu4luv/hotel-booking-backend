import Hotels from "../models/Hotels.js";
import Users from "../models/User.js";

///UPDATE

export const updateUser = async (req, res, next) => {
  try {
    const updatedUsers = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUsers);
  } catch (err) {
    next(err);
  }
};

///DElete

export const deleteUser = async (req, res, next) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    next(err);
  }
};

///get hotel by id

export const getUserById = async (req, res, next) => {
  try {
    const User = await Users.findByIdAndUpdate(req.params.id);
    res.status(200).json(User);
  } catch (err) {
    next(err);
  }
};

///get all hotels

export const getUser = async (req, res, next) => {
  try {
    const User = await Users.find();
    res.status(200).json(User);
  } catch (err) {
    next(err);
  }
};
