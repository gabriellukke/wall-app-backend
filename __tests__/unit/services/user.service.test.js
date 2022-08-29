const sinon = require('sinon');
const { expect } = require('chai');

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
      userModel.findOne.restore();
    });
  
    it('should return an error if user already exists', async () => {
      sinon.stub(userModel, 'findOne').resolves({
        ...userInfo,
        id: 1,
      });
      
      const response = await userService.createUser(userInfo);
  
      expect(response).to.have.property('status', 409);
      expect(response).to.have.property('message', 'E-mail already registered!');
    });
  });
});
