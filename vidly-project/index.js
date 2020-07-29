const express = require('express')
const app = express()
const geners = require('./routes/geners')
const mongoose = require("mongoose")

mongoose
    .connect('mongodb://localhost/vidly')
    .then(() => console.log("Connected to MongoDB ..."))
    .catch((err) => console.error("Error ", err))

    app.use(express.json())
app.use('/api/geners', geners)

app.listen(3000, () => console.log('Server Running ...'))