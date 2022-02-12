const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send("This Web Application runs on port 3000")
})

app.listen(3000) 
    
