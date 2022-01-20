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






























// {
//   "user": {
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJpY2sxIiwiaWF0IjoxNjQyNjU3MTY5fQ.Kc55tj3LHKm6b5FxXBh5nBQe0VVNaLKov2tbITMGXUA",
//     "capabilities": [
//       "read",
//       "create",
//       "update",
//       "delete"
//     ],
//     "id": 5,
//     "username": "Rick1",
//     "password": "$2b$10$DZxe7dZyaOCUFSYPRRBBRuCWAI1zlgj7LA5QsJmdvqNYvQgmnqS2u",
//     "role": "admin",
//     "updatedAt": "2022-01-20T05:39:29.471Z",
//     "createdAt": "2022-01-20T05:39:29.471Z"
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlJpY2sxIiwiaWF0IjoxNjQyNjU3MTY5fQ.Kc55tj3LHKm6b5FxXBh5nBQe0VVNaLKov2tbITMGXUA",
//   "role": "admin"
// }