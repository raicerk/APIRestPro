const secure = require('../utils/security');
const db = require('../utils/db');

exports.add = (req, res) => {

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

exports.login = async (req, res) => {
    conn = await db.ConnectDB();
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
