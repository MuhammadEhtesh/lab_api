const express = require("express");
const clientController = require('../controllers/clientController')
const router = express.Router();

router.get("/", clientController.findAll);
router.post("/", clientController.create);
router.get("/:id", clientController.findById);
router.delete("/:id", clientController.delete);
router.put("/:id", clientController.update);

module.exports = router;