const mongoClient = require('mongodb').MongoClient;

exports.ConnectDB = (config) => {
  return new Promise((resolve, reject) => {
    let client = new mongoClient(`mongodb://${config.HOST}:${config.PORT}/`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 1000,
      socketTimeoutMS: 1000
    });
    client.connect().then(() => {
      resolve(client.db(config.NAMEDB))
    }).catch(err => {
      reject({ error: JSON.parse(JSON.stringify(err)) })
    })
  })
}