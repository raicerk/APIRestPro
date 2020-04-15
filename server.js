const app = require('./app');
const db = require('./utils/db');

app.listen(3000, async () => {
    try {
        conn = await db.ConnectDB();
        console.log('Aplicación ejecutandose en el puerto 3000!');
    } catch (error) {
        console.log(`Error en server: ${error}`)
    }
});