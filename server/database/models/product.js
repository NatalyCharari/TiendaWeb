const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  codigo: { type: Number, required: true },
  nombre: { type: String, required: true },
  marca: { type: String, required: true },
  peso: { type: Number, required: true },
  unidad: { type: String, required: true },
  precio_compra: { type: Number, required: true },
  unidades: { type: Number, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);
