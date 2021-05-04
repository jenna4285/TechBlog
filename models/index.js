const User = require('./User.js');
const Blog = require('./Blog.js');
const Comment = require('./Comment.js');

User.hasMany(Blog, {
    foreignKey: 'id'
});

Blog.belongsTo(User, {
    foreignKey: 'id',
});

User.hasMany(Comment, {
    through: 'Blog',
    foreignKey: 'id',
});

Comment.belongsTo(User, {
    through: 'Blog',
    foreignKey: 'id',
});

module.exports = { User, Blog, Comment };