const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

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

app.post("/api/courses/", (req, res) => {
  const { error } = validateCourse(req.body);

  if (error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) res.status(404).send("The course ID was not found");

  const { error } = validateCourse(req.body);

  if (error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  course.name = req.body.name;
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  return Joi.validate(course, schema);
}

app.get("/api/courses/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));

  if (!course) res.status(404).send("The course ID was not found");
  res.send(course);
});
/*
app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});
*/
app.get("/api/post/:year/:month", (req, res) => {
  res.send(req.params.year);
});

app.get("/api/postQ/:year/:month", (req, res) => {
  res.send(req.query);
});

app.get;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Listening ${PORT} ...`));
