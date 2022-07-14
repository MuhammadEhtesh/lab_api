const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const db = require("./models/index");
const clientRouter = require("./routes/clientRoutes");
const authRouter = require("./routes/authRoutes");
const productRouter = require('./routes/productRoutes');
const dotenv = require('dotenv');
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
dotenv.config();
global.__basedir = __dirname;

db.sequelize.authenticate()
.then(() => {
  db.sequelize.sync({force: false});
console.log(`Db Connected.`);
})
.catch((err) => console.log(`Error occurred `, err))

const port = 4000

app.use('/api/client', clientRouter);
app.use('/api/auth', authRouter);
app.use('/api/product', productRouter);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});