const sinon = require('sinon');
const { expect } = require('chai');

const { userService } = require('../../../src/services');
const { userController } = require('../../../src/controllers');

describe('User Controller', () => {
  const response = {};
  const request = {};

  after(() => {
    userService.createUser.restore();
    // userService.login.restore();
  });

  it('Should return error message when user already exists', async () => {
    request.body = {
      email: 'gabriel@test.com',
    };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(userService, 'createUser').resolves({
      status: 409,
      message: 'User already exists',
    });

    await userController.createUser(request, response);
    expect(response.status.calledWith(409)).to.be.true;
    expect(response.json.calledWith({ message: 'User already exists' })).to.be.true;
    userService.createUser.restore();
  });

  it('should create a user', async () => {
    request.body = {
      email: 'gabriel@test.com',
    };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(userService, 'createUser').resolves({
      status: 200,
      message: 'User registered successfully',
    });

    await userController.createUser(request, response);
    expect(response.status.calledWith(200)).to.be.true;
    expect(response.json.calledWith({ message: 'User registered successfully' })).to.be.true;
  });
});
