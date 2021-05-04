const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contents: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_created: {
        type: DataTypes.DATE,
    },
    author_userID: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id', 
            
        },
    },
    author_username: {
        type: DataTypes.STRING,
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
    modelName: 'Blog',
}
);

module.exports = Blog;