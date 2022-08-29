const sinon = require('sinon');
const { expect } = require('chai');

const { postModel } = require('../../../src/database/models');
const { postService } = require('../../../src/services');

describe('Post Service', () => {
  const postInfo = [
    {
      title: 'my nice post',
      content: 'this is a very nice post',
      authorId: 1,
    },
    {
      title: 'my second nice post',
      content: 'this is a very nice post',
      authorId: 1,
    },
  ];

  after(() => {
    postModel.create.restore();
    postModel.findAll.restore();
  });

  it('should create a post', async () => {
    sinon.stub(postModel, 'create').resolves({
      ...postInfo[0],
      id: 1,
    });

    const response = await postService.create(postInfo);
    expect(response).to.have.property('title', 'my nice post');
    expect(response).to.have.property('content', 'this is a very nice post');
    expect(response).to.have.property('authorId', 1);
  });

  it('should get all posts', async () => {
    sinon.stub(postModel, 'findAll').resolves([
      {
        ...postInfo[0],
        id: 1,
      },
      {
        ...postInfo[1],
        id: 2,
      },
    ]);

    const response = await postService.getAll();
    expect(response).to.be.an('array');
    expect(response).to.have.lengthOf(2);
    expect(response[0]).to.have.property('title', 'my nice post');
    expect(response[0]).to.have.property('content', 'this is a very nice post');
    expect(response[0]).to.have.property('authorId', 1);
    expect(response[1]).to.have.property('title', 'my second nice post');
  });
});
