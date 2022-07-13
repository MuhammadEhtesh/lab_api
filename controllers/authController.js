const bcrypt = require('bcrypt');
const dbContext = require("../models");
const User = dbContext.Users;


exports.login = async (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, async (err, hash) => {
      const loginUser = await User.findOne({
        where: { email: req.body.email, password: hash },
      })
      if (loginUser) {
        res.send(loginUser)
      }
      else {
        res.send(null)
      }
    });
  });
};

exports.register = (req, res) => {
  User.findOne({ where: { email: req.body.email } })
    .then((data) => {
      if (data) {
        res.send("User already exists.");
      } else {
        User.create(req.body)
          .then((resp) => {
            res.send(resp);
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

exports.passwordset = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, async (err, hash) => {
        await User.update(
          { password: hash },
          { where: { username: req.body.username } }
        );
      });
    });
  }
};

exports.forgotpassword = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    res.send(user.password);
  }
}
