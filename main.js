const express = require('express');
const bodyParser = require('body-parser');

const control = require("./controller");
const db = require("./db");

var app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({
        saludo: "Hola a todo el mundo como estan?"
    })
});

app.post('/personas', control.add);
app.get('/personas', control.get);
app.put('/personas/:uuid', control.update);
app.delete('/personas/:uuid', control.delete);
app.get('/personas/:uuid', control.getOne);

app.listen(3000, async () => {
    conn = await db.ConnectDB();
    console.log('Example app listening on port 3000!');
});
