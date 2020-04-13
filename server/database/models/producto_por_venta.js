const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductoPorVentaSchema = new Schema({
  venta: { type: Number, required: true },
  producto: { type: Number, required: true },
  unidades: { type: Number, required: true },
  precio_final: { type: Number, required: true },
});

module.exports = mongoose.model("ProductoPorVenta", ProductoPorVentaSchema);
