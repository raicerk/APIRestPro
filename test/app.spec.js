const request = require("supertest");
const app = require("../app");

var token = '';

describe("Test e2e", () => {
    test("prueba de metodo index principal", done => {
        request(app)
            .get("/")
            .set('Content-Type', 'application/json')
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });

    test('Login exitoso', done => {
        request(app)
            .post('/login')
            .send({
                "usuario": "raicerk",
                "contrasena": "1234"
            })
            .set('Content-Type', 'application/json')
            .then(response => {
                //token = response.body.token;
                expect(response.statusCode).toBe(200);
                done();
            })
    });

    test('Lista personas', done => {
        request(app)
            .get('/personas')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            })
    });

    test('Agregar persona', done => {
        request(app)
            .post('/personas')
            .send({
                "nombre": "Claudio",
                "apellido": "Fuentes",
                "telefono": "+56964890839"
            })
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .then(response => {
                expect(response.statusCode).toBe(201);
                done();
            })
    });
});