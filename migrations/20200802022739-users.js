module.exports = {
  async up(db) {
    await db.collection('usuarios').insertOne({
      usuario: 'raicerk',
      contrasena: '12345',
      estado: true
    });
  },

  async down(db) {
    await db.collection('usuarios').deleteOne({
      usuario: 'raicerk'
    });
  }
};
