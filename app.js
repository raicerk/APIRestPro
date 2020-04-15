const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const control = require("./controller/persona.controller");

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: "API Rest para Claudio"
    })
});

app.post('/personas', control.add);
app.get('/personas', control.get);
app.put('/personas/:uuid', control.update);
app.delete('/personas/:uuid', control.delete);
app.get('/personas/:uuid', control.getOne);

module.exports = app;
