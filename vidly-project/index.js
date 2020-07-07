const Joi = require('joi')
const express = require('express')
const app = express()

app.use(express.json())

const geners = [
    {
        id: 1,
        name: 'sifi'
    },
    {
        id: 2,
        name: 'documentary'
    },
    {
        id: 3,
        name: 'horror'
    }
]

app.get("/api/geners", (req, res) => {
    res.send(geners)
})

app.post("/api/geners", (req, res) => {

    const { error } = validataGener(req.body)
    if (error) return res.status(400).send(result.error.details[0].message)

    const gener = {
        id: geners.length + 1,
        name: req.body.name
    }

    geners.push(gener)
    res.send(geners)
})

app.delete("/api/geners/:id", (req, res) => {
    const result = geners.find(c => c.id == parseInt(req.params.id))

    if(!result) return res.status(404).send('ID NOT FOUND')

    const index = geners.indexOf(result)
    geners.splice(index, 1)
    res.send(result)
})

app.put("/api/geners/:id", (req, res) => {
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

app.listen(3000, () => console.log('Server Running ...'))