const Joi = require('joi')
const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const { compose } = require('underscore')

const genersSchema = new mongoose.Schema({
    gener: { type: String, required: true, minlength: 3, maxlength: 255 },
})

const Gener = new mongoose.model("Gener", genersSchema)

async function createGener(generName) {
    const gener = new Gener ({
        gener: `${generName}`
    });

    try {
        const result = await gener.save();
        console.log(result)
    } catch(ex) {
        for(field in ex.errors)
            console.log(ex.errors[field]);
    }
}

async function removeGener(id) {
    const result = await Gener.deleteOne({ _id: id });
    console.log(result);
}

async function getGener() {
    const geners = await Gener.find()
        .limit(10)
        .sort({ gener: 1 })
        .select({ gener: 1 })
    
    console.log(geners)
}

async function getGeners(id) {
    const geners = await Gener.find({ _id: id})
        .limit(10)
        .sort({ gener: 1 })
        .select({ gener: 1 })
    
    console.log(geners)
}

async function updateGener() {}

router.get("/", (req, res) => {
    getGener()
})


router.get("/:id", (req, res) => {

    // if(req.params.id > geners.length) return res.status(404).send("Sorry we have not found this ID")
    // res.send(geners[req.params.id - 1])

    const idGener = req.params.id
    getGeners(idGener)
})

router.post("/", (req, res) => {
    /**
     * Handle Errors
     */

    // const { error } = validataGener(req.body)
    // if (error) return res.status(400).send(result.error.details[0].message)

    const generPostName = req.body.gener
    console.log(generPostName)
    createGener(generPostName)
})

router.delete("/:id", (req, res) => {
    // const result = geners.find(c => c.id == parseInt(req.params.id))

    // if(!result) return res.status(404).send('ID NOT FOUND')

    // const index = geners.indexOf(result)
    // geners.splice(index, 1)
    // res.send(result)
    const idGener = req.params.id
    removeGener(idGener)
})

router.put("/:id", (req, res) => {
    // const result = geners.find(c => c.id == parseInt(req.params.id))

    // if(!result) return res.status(404).send('So sorry the given ID wa not found')

    // const { error } = validataGener(req.body)
    // if(error) return res.send(400).send(result.error.details[0].message)

    // result.name = req.body.name
    // res.send(result)
})

module.exports = router