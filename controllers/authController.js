const dbContext = require("../models");
const User = dbContext.Users;


exports.login = (req, res) => {

    User.findOne({ where: { username: req.body.username}})
    .then((resp) => {
        console.log(resp);
        res.send(resp);
    })
    .catch(err => console.log(err));
}

exports.register = (req, res) => {
    User.findOne({ where : { email: req.body.email }}).then(data => {
        if(data){
            res.send("User already exists.");
        }
        else{
            User.create(req.body)
            .then((resp) => {
                console.log(resp);
                res.send(resp);
            })
            .catch(err => console.log(err));
        }
    }).catch(err => console.log(err))
}