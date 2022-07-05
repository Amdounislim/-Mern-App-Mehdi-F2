const express = require('express')
const connectDB = require('./config/connectDB')
const user = require('./routes/user')

const app = express()



// 4 - parse data
app.use(express.json())

// 3 - routes
app.use("/api/users", user)

// 2 - connectDB
connectDB()

// 1 - run server
const port = process.envPORT || 7000
app.listen(port, err => {
    err ? console.log(err) : console.log(`The server is running on http://localhost:${port}`)
})