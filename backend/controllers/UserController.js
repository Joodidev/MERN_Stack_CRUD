import User from "../models/UserModel.js";

// get Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// save User
export const saveUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const inserteduser = await user.save();
    res.json(inserteduser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get user by id
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update user
export const updateUser = async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json("User Edited");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.json("User Deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
