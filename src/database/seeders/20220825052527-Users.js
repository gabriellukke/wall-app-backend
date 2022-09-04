'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
    [
      {
        id: uuidv4(),
        firstName: 'Gabriel',
        lastName: 'Almeida',
        email: 'gabs@test.com',
        password: '$2a$10$hSzzai6uJfS158kkixol4Ou3jnLFfnftPFQNynTm9IlGI5FZ1bASW',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: uuidv4(),
        firstName: 'Kéren',
        lastName: 'Hapuch',
        email: 'keren@test.com',
        password: '$2a$10$g5X/TtYzwl/lRBJYFCs8SOSmaEGTnFzoRMnzbhemo2D025Iq7T2vu',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});

    const users = await queryInterface.sequelize.query(
      `SELECT id FROM Users;`,
    );

    const usersRows = users[0];

    return await queryInterface.bulkInsert('Posts', [
      { 
        id: uuidv4(),
        title: 'My first post',
        content: 'This is my first post',
        authorId: usersRows[0].id,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: uuidv4(),
        title: 'My second post',
        content: 'This is my second post',
        authorId: usersRows[1].id,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Posts', null, {});
  }
};
