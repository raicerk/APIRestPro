const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`Aplicación ejecutandose en el puerto ${process.env.PORT}!`);
});