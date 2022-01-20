'use strict';

const express = require('express');
const dataModules = require('../models');
const bearerAuth = require('../middleware/bearer.js');
// const { users } = require('../models/index.js');

const router = express.Router();

router.param('model', (req, res, next) => {
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    console.log('req.model: ', req);
    console.log('req.model: ', req.model);
    next();
  } else {
    next('Invalid Model');
  }
});

router.get('/:model', bearerAuth, handleGetAll);


// router.get('/:model/:id', handleGetOne);
// router.post('/:model', handleCreate);
// router.put('/:model/:id', handleUpdate);
// router.delete('/:model/:id', handleDelete);

async function handleGetAll(req, res) {
  console.log('v2 GET hit');
  let allRecords = await req.model.get();
  res.status(200).json(allRecords);
}

// async function handleGetOne(req, res) {
//   const id = req.params.id;
//   let theRecord = await req.model.get(id);
//   res.status(200).json(theRecord);
// }

// async function handleCreate(req, res) {
//   let obj = req.body;
//   let newRecord = await req.model.create(obj);
//   res.status(201).json(newRecord);
// }

// async function handleUpdate(req, res) {
//   const id = req.params.id;
//   const obj = req.body;
//   let updatedRecord = await req.model.update(id, obj);
//   res.status(200).json(updatedRecord);
// }

// async function handleDelete(req, res) {
//   let id = req.params.id;
//   let deletedRecord = await req.model.delete(id);
//   res.status(200).json(deletedRecord);
// }

// app.get('/posts', bearerAuth(UserModel), acl('read'), (req, res) => {
//   console.log('You made it!');
//   res.status(200).send('Incoming Posts');
// });

// app.post('/posts', bearerAuth(UserModel), acl('create'), (req, res) => {
//   console.log('You made it!');
//   res.status(200).send('Post Created');
// });


module.exports = router;

