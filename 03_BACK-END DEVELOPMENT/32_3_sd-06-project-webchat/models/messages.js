const connection = require('./connection');

const coll = 'messages';

const saveMessage = async ({ chatMessage, nickname, timestamp }) => (
  connection().then((db) => db.collection(coll).insertOne({ chatMessage, nickname, timestamp }))
);

const getAll = async () => {
  const allMessages = await connection().then((db) => db.collection(coll).find().toArray());

  return allMessages;
};

module.exports = { saveMessage, getAll };
