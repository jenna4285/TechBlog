const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.bulkCreate(blogData, {
        individualHooks: false,
        returning: true,
    });
  };

  for (const comment of commentData) {
      await Comment.bulkCreate(commentData, {
          individualHooks: false,
          returning: true,
      });
  };

  process.exit(0);
};

seedDatabase();
