const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init( 
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    comment: {
        type: DataTypes.STRING,
    },
    comment_created: {
        type: DataTypes.DATE,
    }, 
    blog_id: {
        dataType: DataTypes.INTEGER,
        references: {
            model: 'Blog',
            key: 'id',
        },
    },
    comment_author_userID: {
        dataType: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id',
        },
    },
    comment_author_username: {
        dataType: DataTypes.STRING,
        references: {
            model: 'User',
            key: 'username',
        },
    },
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: 'Comment',
    }
); 

module.exports = Comment;