const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAllProducts = () => 
  connection().then((db) => db.collection('products').find().toArray());

// 1 - Crie um endpoint para o cadastro de produtos
// O endpoint deve ser acessível através do caminho (/products);

// Os produtos enviados devem ser salvos em uma collection do MongoDB;

// O endpoint deve receber a seguinte estrutura:
// {
//     "name": "product_name",
//     "quantity": "product_quantity"
//   } (vem atraves de data)

const createProduct = (data) =>
  connection().then((db) => db.collection('products').insertOne(data));

const getProductById = (id) =>
  connection().then((db) => db.collection('products').findOne(ObjectId(id)));

const updateProduct = (id, name, quantity) =>
  connection().then((db) => db.collection('products')
    .updateOne({ _id: ObjectId(id) }, { $set: { name, quantity }}));

const deleteProduct = (id) =>
  connection().then((db) => db.collection('products')
    .deleteOne({ _id: ObjectId(id) }));

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
