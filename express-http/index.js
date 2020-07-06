const express = require("express");
const app = express();
var bodyParser = require("body-parser");


app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/api/posts/:year/:month", (req, res) => {
  //res.send(req.params.year)
  res.send(req.query)
})

app.listen(3000, () => console.log("The server is running"));
