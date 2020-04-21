const db = require('../utils/db');

describe("Test de MongoDB", () => {

    test("Conexion correcta", () => {

        // https://jestjs.io/docs/es-ES/asynchronous#promesas
        let NAMEDB = "persona";
        let resultado = db.ConnectDB({
            PORT: process.env.MONGOPORT || 27017,
            HOST: process.env.MONGOSTRING || 'localhost',
            NAMEDB
        })

        return resultado.then(data => expect(data.databaseName).toStrictEqual(NAMEDB))
    });

    test("Conexion incorrecta", async () => {

        await expect(db.ConnectDB({
            PORT: 27018,
            HOST: "mongodb://localhost",
            NAMEDB: "un nombre"
        })).rejects.toEqual({
            error: {
                name: "MongoNetworkError"
            }
        })
    });
})