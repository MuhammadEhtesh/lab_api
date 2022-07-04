const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const db = require("./models/index");
const clientRouter = require("./routes/clientRoutes");
const loginRouter = require("./routes/loginRoutes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

db.sequelize.authenticate()
.then(() => {
  db.sequelize.sync({force: false});
console.log(`Authenticated`);
})
.catch((err) => console.log(`Error occurred `, err))

const port = 4000

app.use('/api/client', clientRouter);
app.use('/api/login', loginRouter);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});