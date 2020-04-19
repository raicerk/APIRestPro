const db = require('../utils/db');

describe("Test de MongoDB", () => {

    test("Conexion correcta", async () => {
        let esperado = "persona";
        let resultado = await db.ConnectDB({
            PORT: process.env.MONGOPORT,
            HOST: process.env.MONGOSTRING,
            NAMEDB: process.env.MONGODBNAME
        })
        expect(resultado.databaseName).toStrictEqual(esperado)
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