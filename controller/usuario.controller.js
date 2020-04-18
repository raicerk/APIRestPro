const secure = require('../utils/security');

exports.add = (req, res) => {

    let conn = req.app.locals.db;

    let { usuario, contrasena, estado } = req.body

    conn.collection("usuarios").insertOne({
        usuario,
        contrasena,
        estado
    }).then(resp => {
        console.log(resp.result);
        res.status(201).json({
            status: "Usuario agregado correctamente"
        })
    })
}

exports.login = (req, res) => {

    let conn = req.app.locals.db;
    
    let { usuario, contrasena } = req.body;

    conn.collection("usuarios").find({ usuario, contrasena, estado: true }).toArray().then(result => {
        if (result) {
            const token = secure.creaToken();
            res.status(200).json({
                token
            })
        }
    });
}
