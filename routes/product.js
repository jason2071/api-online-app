const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const {
  allProduct,
  addProduct,
  editProduct,
} = require("../controllers/product");

router.get("/", allProduct);
router.post(
  "/add",
  body("name", "Please enter product name").not().isEmpty(),
  addProduct
);
router.post(
  "/edit",
  body("id", "ID is not empty").not().isEmpty(),
  body("name", "Please enter product name").not().isEmpty(),
  editProduct
);

module.exports = router;
