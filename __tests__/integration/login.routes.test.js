const request = require('supertest');
const { expect } = require('chai');
const app = require('../../src/app');

const login = require('../mocks/login.json');
const newUser = require('../mocks/newUser.json');

describe('Post Routes', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/user/register')
      .send(newUser);

    expect(response.statusCode).to.equal(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('message', 'User registered successfully');
  }).timeout(10000);

  it('should login', async () => {
    const response = await request(app)
      .post('/user/login')
      .send(login);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.property('token');
    expect(response.body).to.have.property('firstName', 'Gabriel');
    expect(response.body).to.have.property('lastName', 'Almeida');
  });

  it('should not login with incorrect password', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ ...login, password: '12345687' });

    expect(response.status).to.be.equal(401);
    expect(response.body).to.have.property('message', 'Unauthorized, incorrect password');
  });

  it('should not login with incorrect email', async () => {
    const response = await request(app)
      .post('/user/login')
      .send({ ...login, email: 'gabriel@test.com'});

    expect(response.status).to.be.equal(401);
    expect(response.body).to.have.property('message', 'Unauthorized, incorrect or unregistered email');
  });
});