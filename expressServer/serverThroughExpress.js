const express = require("express");
const app = express();

const products = ["Television", "LCD", "Mobile", "Playstation4"];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/products", function (req, res) {
  res.send(products);
});

app.get("/api/products/:index", function (req, res) {
  if (!products[req.params.index]) {
    return res.status(400).send("Product not Found");
  }

  res.send(products[req.params.index]);
});

app.listen(8080);
