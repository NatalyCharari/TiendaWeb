const mongoose = require("mongoose");

const URI = "mongodb://localhost/tienda-web";
const OPTIONS = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

mongoose
  .connect(URI, OPTIONS)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

module.exports = mongoose;
