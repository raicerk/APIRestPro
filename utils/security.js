const jwt = require('jsonwebtoken');

exports.protegida = (req, res, next) => {

    let token = req.headers['authorization'];

    if (token) {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        jwt.verify(token, process.env.KEY, (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Token inválida' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({
            mensaje: 'Token no proveída.'
        });
    }
}

exports.creaToken = () => {
    return jwt.sign(payload = {
        check: true
    }, 'apiclaudio', {
        expiresIn: 1440
    });
}