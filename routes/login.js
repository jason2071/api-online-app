const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { login } = require("../controllers/login");

router.post(
  "/",
  body("username", "Please enter email").isEmail(),
  body(
    "password",
    "Please enter a password and a password of 6 digits or more."
  ).isLength({
    min: 6,
  }),
  login
);

module.exports = router;
