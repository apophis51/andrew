// server.spec.js (Jasmine tests)
import  request  from 'supertest';
import {app} from '../server/server.js';


describe('Express API Tests', () => {
  it('GET /hello should return "Hello, world!"', async () => {
    const response = await request(app).get('/hello');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello, world!' });
  });

  it('POST /add should return the sum of two numbers', async () => {
    const response = await request(app)
      .post('/add')
      .send({ num1: 5, num2: 10 });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ sum: 15 });
  });

    it('POST /add should return 400 for invalid input', async () => {
        const response = await request(app)
            .post('/add')
            .send({num1: "hello", num2: 10});

        expect(response.status).toBe(400);
        expect(response.body).toEqual({error: "Invalid input"});
    });

  it('GET /user/:id should return user data', async () => {
    const response = await request(app).get('/user/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 1, name: 'Alice' });
  });

  it('GET /user/:id should return 404 for non-existent user', async () => {
    const response = await request(app).get('/user/999');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'User not found' });
  });

    it('GET /user/:id should return 400 for invalid id', async () => {
        const response = await request(app).get('/user/abc');
        expect(response.status).toBe(400);
        expect(response.body).toEqual({error: "invalid id"});

    });
});