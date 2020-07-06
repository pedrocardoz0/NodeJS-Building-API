const Joi = require("joi")
const express = require("express");
const app = express();

app.use(express.json())

const courses = [
  { id: 1, name: 'c1' },
  { id: 2, name: 'c2' },
  { id: 3, name: 'c3' }
]

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.get("/api/courses", (req, res) => {
  res.send(courses)
})

app.post("/api/courses", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required()
  }
  const result = Joi.validate(req.body, schema)

  if(result.error) {
    res.status(400).send(result.error.details[0].message)
  }
  
  const course = {
    id: courses.length,
    name: req.body.name
  }
  courses.push(course)
  res.send(courses)
})

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id))

  if (!course) res.status(404).send('The course was not found')
  res.send(course)
})

app.listen(3000, () => console.log("The server is running"));
