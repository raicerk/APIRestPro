const config = {
  mongodb: {
    // TODO Change (or review) the url to your MongoDB:
    url: `mongodb://${process.env.MONGOSTRING || 'localhost'}:${process.env.MONGOPORT || 27017}/${process.env.MONGODBNAME || 'persona'}`,
    // TODO Change this to your database name:
    databaseName: process.env.MONGODBNAME || 'persona',
    options: {
      useNewUrlParser: true, // removes a deprecation warning when connecting
      useUnifiedTopology: true, // removes a deprecating warning when connecting
    }
  },
  migrationsDir: "migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js"
};
module.exports = config;
