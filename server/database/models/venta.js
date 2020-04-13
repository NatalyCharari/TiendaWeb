const mongoose = require("mongoose");
const { Schema } = mongoose;

const VentaSchema = new Schema({
  codigo: { type: Number, required: true },
  vendedor: { type: Number, required: true },
  fecha: { type: Date, required: true },
});

module.exports = mongoose.model("Venta", VentaSchema);
