const express = require("express");
const morgan = require("morgan");
const path = require("path");

const { mongoose } = require("./database/index");
const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/productos", require("./api/producto.routes"));
app.use("/api/vendedores", require("./api/venta.routes"));

// Static files
app.use(express.static(path.join(__dirname, "../client/public")));

// Starting the server
app.listen(app.get("port"), () => {
  console.log("server on port " + app.get("port"));
});
