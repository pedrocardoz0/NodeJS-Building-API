const Joi = require('joi')
const express = require("express")
const router = express.Router()

const geners = [
    { id: 1, name: 'SiFi'},
    { id: 2, name: 'Documentary'},
    { id: 3, name: 'Horror'}
]

router.get("/", (req, res) => {
    res.send(geners)
})

router.get("/:id", (req, res) => {

    if(req.params.id > geners.length) return res.status(404).send("Sorry we have not found this ID")
    res.send(geners[req.params.id - 1])
})

router.post("/", (req, res) => {

    const { error } = validataGener(req.body)
    if (error) return res.status(400).send(result.error.details[0].message)

    const gener = {
        id: geners.length + 1,
        name: req.body.name
    }

    geners.push(gener)
    res.send(geners)
})

router.delete("/:id", (req, res) => {
    const result = geners.find(c => c.id == parseInt(req.params.id))

    if(!result) return res.status(404).send('ID NOT FOUND')

    const index = geners.indexOf(result)
    geners.splice(index, 1)
    res.send(result)
})

router.put("/:id", (req, res) => {
    const result = geners.find(c => c.id == parseInt(req.params.id))

    if(!result) return res.status(404).send('So sorry the given ID wa not found')

    const { error } = validataGener(req.body)
    if(error) return res.send(400).send(result.error.details[0].message)

    result.name = req.body.name
    res.send(result)
})

function validataGener(gener) {
    const schema = {
        "name": Joi.string().min(4).required()
    }

    return Joi.validate(gener, schema)
}

module.exports = router