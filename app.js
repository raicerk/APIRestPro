const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const secure = require('./utils/security');
const control = require("./controller/persona.controller");

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: "API Rest para Claudio"
    })
});

app.post('/personas', secure.protegida, control.add);
app.get('/personas', secure.protegida, control.get);
app.put('/personas/:uuid', secure.protegida, control.update);
app.delete('/personas/:uuid', secure.protegida, control.delete);
app.get('/personas/:uuid', secure.protegida, control.getOne);

module.exports = app;
