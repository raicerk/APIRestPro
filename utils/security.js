const jwt = require('jsonwebtoken');

exports.protegida = (req, res, next) => {

    let token = req.headers['authorization'];

    if (token) {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        jwt.verify(token, 'apiclaudio', (err, decoded) => {
            if (err) {
                return res.status(403).json(err);
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(403).send({
            mensaje: 'Token no proveído.'
        });
    }
}

exports.creaToken = () => {
    return jwt.sign(payload = {
        check: true
    }, 'apiclaudio', {
        expiresIn: "2 days"
    });
}