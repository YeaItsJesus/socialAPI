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