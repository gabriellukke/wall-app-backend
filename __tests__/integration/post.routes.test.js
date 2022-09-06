const request = require('supertest');
const { expect } = require('chai');
const app = require('../../src/app');

const login = require('../mocks/login.json');
const allPosts = require('../mocks/allPosts.json');

describe('Post Routes', () => {
  it('should get all posts', async () => {
    const response = await request(app).get('/post');

    expect(response.statusCode).to.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body).to.have.length.greaterThan(0);
  });

  it('should create a post', async () => {
    const loginResponse = await request(app).post('/user/login').send(login);
    const response = await request(app)
      .post('/post')
      .send({
        title: 'my nice post',
        content: 'this is a very nice post',
        authorId: loginResponse.body.id,
      })
      .set("authorization", loginResponse.body.token);

    expect(response.statusCode).to.equal(200);
    expect(response.body).to.have.property('title', 'my nice post');
    expect(response.body).to.have.property('content', 'this is a very nice post');
  });
});