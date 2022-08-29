const sinon = require('sinon');
const { expect } = require('chai');
const bcrypt = require('bcryptjs');

const { userModel } = require('../../../src/database/models');
const { userService } = require('../../../src/services');
const sendEmail = require('../../../src/middlewares/sendEmail');

describe('User Service', () => {
  describe('Create/register user', () => {
    const userInfo = {
      firstName: 'Gabriel',
      lastName: 'Almeida',
      email: 'gabriel@test.com',
      password: '12345678',
    };
    const mockObj = {
      sendEmail,
    }
  
    after(() => {
      userModel.findOne.restore();
      userModel.create.restore();
    });

    it('should return an error if user already exists', async () => {
      sinon.stub(userModel, 'findOne').resolves({
        ...userInfo,
        id: 1,
      });
      
      const response = await userService.createUser(userInfo);
  
      expect(response).to.have.property('status', 409);
      expect(response).to.have.property('message', 'E-mail already registered!');
      userModel.findOne.restore();
    });
  
    it('should create a user', async () => {
      sinon.stub(userModel, 'findOne').resolves(null);
      sinon.stub(userModel, 'create').resolves({
        ...userInfo,
        id: 1,
      });
      sinon.stub(mockObj, 'sendEmail').callsFake(() => {});
      
      const response = await userService.createUser(userInfo);
  
      expect(response).to.have.property('status', 200);
      expect(response).to.have.property('message', 'User registered successfully');
    });
  });

  describe('Login user', () => {
    const userInfo = {
      firstName: 'Gabriel',
      lastName: 'Almeida',
      email: 'gabriel@test.com',
      password: '12345678',
    };

    after(() => {
      userModel.findOne.restore();
      bcrypt.compare.restore();
      bcrypt.genSalt.restore();
      bcrypt.hash.restore();
    });

    it('should return an error if user does not exist', async () => {
      sinon.stub(userModel, 'findOne').resolves(null);
      
      const response = await userService.login(userInfo);

      expect(response).to.have.property('message', 'Unauthorized, incorrect or unregistered email');
      userModel.findOne.restore();
    });

    it('should return an error if password is incorrect', async () => {
      sinon.stub(userModel, 'findOne').resolves({
        ...userInfo,
        id: 1,
      });
      sinon.stub(bcrypt, 'compare').resolves(false);
      
      const response = await userService.login(userInfo);

      expect(response).to.have.property('message', 'Unauthorized, incorrect password');
      bcrypt.compare.restore();
      userModel.findOne.restore();
    });

    it('should return a token if user is authenticated', async () => {
      sinon.stub(userModel, 'findOne').resolves({
        ...userInfo,
        id: 1,
      });
      sinon.stub(bcrypt, 'compare').resolves(true);
      sinon.stub(bcrypt, 'genSalt').resolves('salt');
      sinon.stub(bcrypt, 'hash').resolves('hashedPassword');
      
      const response = await userService.login(userInfo);

      expect(response).to.have.property('token');
      expect(response).to.have.property('userId', 1);
      expect(response).to.have.property('firstName', 'Gabriel');
      expect(response).to.have.property('lastName', 'Almeida');
      expect(response).to.have.property('email', 'gabriel@test.com');
    }).timeout(5000);
  });
});
