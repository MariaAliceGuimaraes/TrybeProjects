const connection = require('./connection');

// Req 1
const getAllUsers = async () => connection()
  .then((db) => db.collection('users').find().toArray());

const createUser = async (data) => connection()
  .then((db) => db.collection('users').insertOne(data));

// Req 2
const findOneUser = async (email) => connection()
.then((db) => db.collection('users').findOne({ email }));

module.exports = {
  createUser,
  getAllUsers,
  findOneUser,
};
