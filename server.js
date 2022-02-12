const express = require('express')
const mssql = require('mssql')
require('dotenv').config()
const app = express()


//connecting to database

app.get('/', function (req, res) {
  res.send("This Web Application runs on port 3000")
})

app.get('/student', function(req, res){
    res.send(" This is a list of jitu interns")
})

app.get('/student/:id', function(req, res){
  const id = req.params.id
  res.send(" This is a jitu interns with an ID of" + id)
})

const port = process.env.PORT
app.listen(3000) 
    
