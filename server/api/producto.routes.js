const express = require("express");
const router = express.Router();

const Producto = require("../database/models/product");

router.get("/", async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

module.exports = router;
