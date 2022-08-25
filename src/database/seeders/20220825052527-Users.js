'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        id: 1,
        firstName: 'Gabriel',
        lastName: 'Almeida',
        email: 'gabs@test.com',
        password: '$2a$10$hSzzai6uJfS158kkixol4Ou3jnLFfnftPFQNynTm9IlGI5FZ1bASW',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        id: 2,
        firstName: 'Kéren',
        lastName: 'Hapuch',
        email: 'keren@test.com',
        password: '$2a$10$g5X/TtYzwl/lRBJYFCs8SOSmaEGTnFzoRMnzbhemo2D025Iq7T2vu',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  async down (queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
