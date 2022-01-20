'use strict';

// require('dotenv').config();
const server = require('./auth-api/lib/server.js');
const { db } = require('./auth-api/lib/auth/models');

db.sync().then(() => {
  server.start(process.env.PORT || 3000);
});
