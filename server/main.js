const express = require("express")
const mongoose = require("mongoose")
const app = express()
require("dotenv").config()

const port = 3000

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Successful DB connection"))
  .catch((err) => console.log(`Connection failed ${err}`))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/", (req, res) => {
  res.json({ hello: "world" })
})

console.log("env:", process.env.MONGO_URL)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
