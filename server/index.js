// BASIC SERVER BUILD
require("dotenv").config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const ctrl = require('./controller')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }
}))

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    console.log("db connected")
    app.listen(SERVER_PORT, () => console.log(`Server Port listening on ${SERVER_PORT}`))
})

// ENDPOINTS
app.get('/api/list', ctrl.getList)
app.post('/api/list', ctrl.addToDo)
app.put('/api/list/:id', ctrl.editToDo)
app.delete('/api/list/:id', ctrl.deleteToDo)

