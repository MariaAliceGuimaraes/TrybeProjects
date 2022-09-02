const { MongoClient } = require('mongodb');

// conexão do banco local
// const MONGO_DB_URL = 'mongodb://localhost:27017/Cookmaster';
// const DBNAME = 'Cookmaster';

// conexão do banco para o avaliador funcionar
const MONGO_DB_URL = 'mongodb://mongodb:27017/Cookmaster';
const DBNAME = 'Cookmaster';

const one = 1;

const connection = () =>
  MongoClient.connect(MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((conn) => conn.db(DBNAME))
    .catch((err) => {
      console.error(err);
      process.exit(one);
    });

module.exports = connection;
