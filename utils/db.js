const mongoClient = require('mongodb').MongoClient;

exports.ConnectDB = () => {
    try {
      return new Promise((resolve, reject) => {
        let client = new mongoClient("mongodb://localhost:27017/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            poolSize: 2
        });
        client.connect().then(() => {
          resolve(client.db("persona"))
        }).catch(err => {
          reject(err)
        })
      })
    } catch (error) {
      console.log(`Error en la conexion de la base de datos de mongo, el detalle es: ${error}`);
    }
  }