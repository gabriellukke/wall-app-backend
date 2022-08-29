const sinon = require('sinon');
const { expect } = require('chai');

const { postService } = require('../../../src/services');
const { postController } = require('../../../src/controllers');

describe('Post Controller', () => {
  const response = {};
  const request = {};

  after(() => {
    postService.create.restore();
    postService.getAll.restore();
  })

  it('should create a post', async () => {
    request.body = {
      title: 'my nice post',
      content: 'this is a very nice post',
      authorId: 1,
    };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(postService, 'create').resolves({
      ...request.body,
      id: 1,
    });

    await postController.create(request, response);
    expect(response.status.calledWith(200)).to.be.true;
    expect(
      response.json.calledWith({
        ...request.body,
        id: 1,
      })
    ).to.be.true;
  });

  it('should get all posts', async () => {
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(postService, 'getAll').resolves([
      {
        ...request.body,
        id: 1,
      },
      {
        ...request.body,
        id: 2,
      },
    ]);

    await postController.getAll(request, response);
    expect(response.status.calledWith(200)).to.be.true;
    expect(response.json.calledWith([
      {
        ...request.body,
        id: 1,
      },
      {
        ...request.body,
        id: 2,
      },
    ])).to.be.true;
  });
});
