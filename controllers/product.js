const { validationResult } = require("express-validator");
const Product = require("../models/Product");

exports.allProduct = async (req, res) => {
  try {
    if (req.query.id) {
      const product = await Product.findOne({ _id: req.query.id });

      if (!product) {
        return res.json({ data: {} });
      } else {
        return res.json({ data: product });
      }
    }

    const products = await Product.find();
    if (!products) {
      return res.json({ data: [] });
    } else {
      return res.json({ data: products });
    }
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: "Product not found" }] });
  }
};

exports.addProduct = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, price, amount } = req.body;

    const product = await Product.findOne({ name });
    if (product) {
      return res
        .status(400)
        .json({ errors: [{ msg: `${name} is duplicate` }] });
    }

    const newProduct = new Product({ name, description, price, amount });

    if (!price) {
      newProduct.price = 0;
    }

    if (!amount) {
      newProduct.amount = 0;
    }

    if (!description) {
      newProduct.description = "";
    }

    await newProduct.save();

    return res.json({ success: true });
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: error.message }] });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id, name, description, price, amount } = req.body;

    const update = {};

    if (name) {
      update.name = name;
    }
    if (description) {
      update.description = description;
    }
    if (price) {
      update.price = price;
    }
    if (amount) {
      update.amount = amount;
    }

    await Product.findOneAndUpdate({ _id: id }, update);

    const product = await Product.findOne({ _id: id });

    return res.json({ success: true, data: product });
  } catch (error) {
    return res.status(400).json({ errors: [{ msg: error.message }] });
  }
};
