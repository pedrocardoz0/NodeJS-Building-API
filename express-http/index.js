const express = require("express");
const app = express();
var bodyParser = require("body-parser");

const courses = [
  { id: 1, name: 'c1' },
  { id: 2, name: 'c2' },
  { id: 3, name: 'c3' }
]

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("api/courses/", (req, res) => {
  res.send(courses)
})

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id))

  if (!course) res.status(404).send('The course was not found')
  res.send(course)
})

app.listen(3000, () => console.log("The server is running"));
