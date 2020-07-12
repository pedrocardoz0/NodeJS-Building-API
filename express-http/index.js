const appDebuger = require('debug')('app:appDebuger')
const dbDebuger = require('debug')('app:db')
const config = require('config')
const morgan = require("morgan")
const helmet = require("helmet")
const logger = require("./middleware/logger")
const auther = require("./middleware/auth")
const express = require("express");
const app = express();
const courses = require("./routes/courses")
const home = require("./routes/home")

// Template Engine
app.set("view engine", "pug")
app.set("views", "./views")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(helmet())

//Routes
app.use('/api/courses', courses)
app.use('/', home)

//Console
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`app: ${app.get('env')}`)
console.log("Aplication Name: " + config.get("name"))
console.log("Mail Server: " + config.get("mail.host"))
console.log("Mail Password: " + config.get("mail.password"))

if(app.get('env') === "development") {
  app.use(morgan('tiny'))
  appDebuger("Morgan Enable")
}

//DB Working
dbDebuger("Connected to the database ...")

//Middleware
app.use(logger)
app.use(auther)

//Port Listener
app.listen(3000, () => console.log("The server is running"));
