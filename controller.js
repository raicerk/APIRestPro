const uuid = require('uuid');

var db = [];

exports.add = (req, res) => {

    let { nombre, apellido, telefono } = req.body;

    db = [...db, {
        uuid: uuid.v4(),
        nombre,
        apellido,
        telefono
    }]

    res.status(201).json({
        response: "creado correctamente"
    })
}

exports.get = (req, res) => {
    res.status(201).json({
        personas: db
    })
}

exports.update = (req, res) => {
    
    let { nombre, apellido, telefono } = req.body;

    db = db.filter(item => item.uuid != req.params.uuid);

    db = [...db, {
        uuid: req.params.uuid,
        nombre,
        apellido,
        telefono
    }]

    res.status(200).json({
        response: "actualizado"
    })

}

exports.delete = (req, res) => {
    db = db.filter(item => item.uuid != req.params.uuid);
    res.status(200).json({
        response: "borrado correctamente"
    })
}

exports.getOne = (req, res) => {

    res.status(200).json({
        response: db.filter(item => item.uuid == req.params.uuid)
    })
}