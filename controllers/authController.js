const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const dbContext = require("../models");
const User = dbContext.Users;


//Api for verification of user LogIn
exports.login = async (req, res) => {

  const loginUser = await User.findOne({
    where: { email: req.body.email },
  });

  bcrypt.compare(req.body.password, loginUser.password, async (err, result) => {
    if (result) {
      let jwtSecretKey = process.env.JWT_SECRET_KEY;
      let data = {
        time: Date(),
        userId: 12,
      }
      const token = jwt.sign(data, jwtSecretKey);
      res.status(200).send({ api_token: token, User: loginUser })
    }
    else {
      res.send('Please try again.')
    }
  })
};

//Api for Register new User
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

//Api for Password of user
exports.passwordset = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, async (err, hash) => {
        await User.update(
          { password: hash },
          { where: { email: req.body.email } }
        );
      });
    });
    res.send('Password is Saved Successfully');
  }
};

// Api For Forgot Password
exports.forgotpassword = async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user) {
    res.send(user.password);
  }
}

//Api for json Tocken
exports.jwttoken = (req, res) => {
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  let data = {
    time: Date(),
    userId: 12,
  }
  const token = jwt.sign(data, jwtSecretKey);
  res.send(token);
}