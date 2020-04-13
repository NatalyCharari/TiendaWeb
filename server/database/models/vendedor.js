const mongoose = require("mongoose");
const { Schema } = mongoose;

const VendedorSchema = new Schema({
  id: { type: Number, required: true },
  nombre: { type: String, required: true },
  contrasena: { type: String, required: true },
});

module.exports = mongoose.model("Vendedor", VendedorSchema);
