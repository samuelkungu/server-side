const express = require('express')
const app = express ()

app.use(express.json())
app.use('/users', require('./Routes/userRoutes'))
app.listen(3005, ()=> {
    console.log("The App Is Running")
})