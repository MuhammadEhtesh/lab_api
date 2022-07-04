const dbContext = require("./../models");
const Client = dbContext.Clients;


exports.login = (req, res) => {

    Client.findOne({ where: { username: req.body.username}})
    .then((resp) => {
        console.log(resp);
        res.send(resp);
    })
    .catch(err => console.log(err));
}