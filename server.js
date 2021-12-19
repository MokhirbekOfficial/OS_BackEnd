const express = require('express')
const app = express()
const router = require('./modules/routes')
let cors = require('cors')

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)

app.listen(4000, console.log(4000))