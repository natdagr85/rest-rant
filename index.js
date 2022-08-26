//modules and globals
const express = require("express");
const app = express();
require("dotenv").config();

//express settings
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));

//controllers and routes
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

//listen for connections
app.listen(process.env.PORT, () => {
  console.log("opened at 3000");
});
