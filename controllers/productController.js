const uploadFile = require("../middleware/upload");
const dbContext = require('../models')
const Product = dbContext.Products;

exports.upload = async (req, res) => {
  try {
    await uploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    req.body.imageUrl = req.imageUrl;
    req.body.price = parseInt(req.body.price);
    const prod = await Product.create(req.body);
    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};