const uuid = require('uuid');

exports.add = (req, res) => {

    let conn = req.app.locals.db;

    let { nombre, apellido, telefono } = req.body;

    conn.collection("contactos").insertOne({
        uuid: uuid.v4(),
        nombre,
        apellido,
        telefono
    }).then(resp => {
        res.status(201).json({
            response: "creado correctamente"
        })
    })
}

exports.get = (req, res) => {

    let conn = req.app.locals.db;

    conn.collection("contactos").find({}).toArray().then(resp => {
        res.status(200).json({
            personas: resp
        })
    });
}

exports.update = (req, res) => {

    let conn = req.app.locals.db;

    let { nombre, apellido, telefono } = req.body;

    conn.collection("contactos").updateOne({ uuid: req.params.uuid }, {
        $set: {
            nombre,
            apellido,
            telefono
        }
    }).then(resp => {
        console.log(resp.result);
        res.status(200).json({
            response: "actualizado"
        })
    })
}

exports.delete = (req, res) => {

    let conn = req.app.locals.db;

    conn.collection("contactos").deleteOne({ uuid: req.params.uuid }).then(resp => {
        console.log(resp.result);
        res.status(200).json({
            response: "borrado correctamente"
        })
    })
}

exports.getOne = (req, res) => {

    let conn = req.app.locals.db;
    
    conn.collection("contactos").find({ uuid: req.params.uuid }).toArray().then(resp => {
        res.status(200).json({
            personas: resp
        })
    });
}