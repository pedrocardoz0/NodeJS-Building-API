const express = require('express')
const app = express()
const geners = require('./routes/geners')

app.use(express.json())
app.use('/api/geners', geners)

app.listen(3000, () => console.log('Server Running ...'))