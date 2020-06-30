const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 4]);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/post/:year/:month", (req, res) => {
    res.send(req.params.year)
})

app.get("/api/postQ/:year/:month", (req, res) => {
    res.send(req.query)
})

app.get

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Listening ${PORT} ...`));
