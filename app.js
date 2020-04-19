const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const secure = require('./utils/security');
const db = require('./utils/db');

const user = require('./controller/usuario.controller');
const person = require('./controller/persona.controller');

if (process.env.NODE_ENV === "development") {
    require('dotenv').config();
}

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: "API Rest para Claudio"
    })
});

db.ConnectDB({
    PORT: process.env.MONGOPORT,
    HOST: process.env.MONGOSTRING,
    NAMEDB: process.env.MONGODBNAME
}).then(conn => {
    app.locals.db = conn;
})

app.post('/usuario', user.add);
app.post('/login', user.login);

app.post('/personas', secure.protegida, person.add);
app.get('/personas', secure.protegida, person.get);
app.put('/personas/:uuid', secure.protegida, person.update);
app.delete('/personas/:uuid', secure.protegida, person.delete);
app.get('/personas/:uuid', secure.protegida, person.getOne);

module.exports = app;
