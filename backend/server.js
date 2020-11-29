// express is a node package which is used to make webserver

import express from "express";
import data from "./data.js";
const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is Ready");
});

app.listen(port, () => {
  console.log(`server runnung at port ${port}`);
});
