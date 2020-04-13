const express = require("express");
const router = express.Router();

const Venta = require("../database/models/venta");

router.get("/", async (req, res) => {
  const ventas = await Venta.find();
  res.json(ventas);
});

module.exports = router;
