const express = require("express")
const router = express.Router()
const Joi = require("joi")

const courses = [
    { id: 1, name: 'c1' },
    { id: 2, name: 'c2' },
    { id: 3, name: 'c3' }
]


// router.get("/", (req, res) => {
//     res.render('index', {title: "My Express Website", message: "Hello World !"})
// });

router.get("/", (req, res) => {
    res.send(courses)
})

router.post("/", (req, res) => {

    const { error } = validateCourse(req.body)
    if(error) return res.status(400).send(result.error.details[0].message)

    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(courses)
})

router.put("/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))

    if (!course) return res.status(404).send('The course was not found')

    const { error } = validateCourse(req.body)
    if(error) return res.status(400).send(result.error.details[0].message)

    course.name = req.body.name
    res.send(course)
})

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(course, schema)
}

router.delete("/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('The course was not found')

    const index = courses.indexOf(course)
    courses.splice(index, 1)

    res.send(course)
})

router.get("/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))

    if (!course) return res.status(404).send('The course was not found')
    res.send(course)
})

module.exports = router