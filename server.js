
"use strict";
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const db = require("./models/index");
const clientRouter = require("./routes/clientRoutes");

const app = express();

app.use(cors());
app.use(morgan("dev"));

db.sequelize
.authenticate()
.then(() => {
db.sequelize.sync({ force: false });
console.log(`Authenticated`);
})
.catch((err) => console.log(`Error occurred `, err))

const port = 4000

app.get('/api/client', clientRouter);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});