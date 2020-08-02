const db = require('../utils/db');

describe("Test de MongoDB", () => {

    test("Conexion correcta", () => {
        let NAMEDB = "persona";
        let resultado = db.ConnectDB({
            PORT: process.env.MONGOPORT || 27017,
            HOST: process.env.MONGOSTRING || 'localhost',
            NAMEDB: process.env.MONGODBNAME || NAMEDB
        })

        return resultado.then(data => expect(data.databaseName).toStrictEqual(NAMEDB))
    });

    test("Conexion incorrecta", () => {
        let DERROR = {
            error: {
                name: "MongoServerSelectionError"
            }
        }
        let resultado = db.ConnectDB({
            PORT: 27018,
            HOST: "mongodb://localhost",
            NAMEDB: "un nombre"
        })

        return resultado.catch(error => expect(error).toEqual(DERROR))

    });
})