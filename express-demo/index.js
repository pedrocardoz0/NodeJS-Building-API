const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
];

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) res.status(404).send("The course ID was not found");
  res.send(course);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/post/:year/:month", (req, res) => {
  res.send(req.params.year);
});

app.get("/api/postQ/:year/:month", (req, res) => {
  res.send(req.query);
});

app.get;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Listening ${PORT} ...`));
