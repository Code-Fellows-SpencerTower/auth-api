'use strict';

const userModel = require('./users.schema.js');
const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes.shema.js');
const foodModel = require('./food.schema.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new Collection(food),
  clothes: new Collection(clothes),
};
