const express = require('express')
const { createConnection } = require('mysql')

const connection = require('./db')

const app = express()
app.set('view engine','ejs')
const router = require("./src/router/router")

app.use(express.json())
app.use('/api', router)


app.listen(3000, ()=>{
    console.log('app listening')
})