const express = require("express");
const authController = require('../controllers/authController')
const router = express.Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/passwordset", authController.passwordset);
router.post("/forgotpassword", authController.forgotpassword);
router.post("/jwttoken", authController.jwttoken);

module.exports = router;