const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
];

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.put("/api/courses/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) res.status(404).send("The Course ID Was Not Found");

  res.send(course);
  console.log(req.body)
});

app.listen(3000, () => console.log("The server is running"));
