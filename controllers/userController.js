const User = require('./models/User');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const dbUserData = await User.find({});
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  async getUserById(req, res) {
    try {
      const dbUserData = await User.findOne({ _id: req.params.id });
      if (!dbUserData) {
        res.status(404).json({ message: 'No User Found, Check ID' });
        return;
      }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        { new: true, runValidators: true }
      );
      if (!dbUserData) {
        res.status(404).json({ message: 'User Could Not be Found' });
        return;
      }
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const dbUserData = await User.findOneAndDelete({ _id: req.params.id });
      res.json(dbUserData);
    } catch (err) {
      res.status(400).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } },
        { new: true }
      );
      if (!dbUserData) {
        res.status(404).json({ message: 'User could not be found' });
        return;
      }
      res.json(dbUserData);
    } catch (err) {
      res.json(err);
    }
  },