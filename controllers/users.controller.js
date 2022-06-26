const { User } = require('../models');

// // Get all users
// const getUsers = async (req, res) => {
//   const students = await User.find();

// }

// const createUser = async (req, res) => {
//   console.log("i am here");
//   // try {
//   //   console.log("i am here");
//   //   const newUser = await User.create(req.body);
//   //   res.status(200).json(newUser);
//   // } catch (err) {
//   //   res.status(400).json(({ message: "Your request could not be performed, please try again", body: err }));
//   // };
// };

// module.exports = { createUser };

module.exports = {
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  }
};