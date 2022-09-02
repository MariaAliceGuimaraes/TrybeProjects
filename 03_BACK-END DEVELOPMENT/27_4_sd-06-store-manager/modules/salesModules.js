const connection = require('./connection');
const { ObjectId } = require('mongodb');

// 6 - Crie um endpoint para listar as vendas
// O endpoint deve ser acessível através do caminho (/sales) ou (/sales/:id);

// Através do caminho /sales, todas as vendas devem ser retornadas;

// Através do caminho /sales/:id, apenas a venda com o id presente na URL deve ser retornada;

const getAllSales = () => 
  connection().then((db) => db.collection('sales').find().toArray());


//   5 - Crie um endpoint para cadastrar vendas
//   O endpoint deve ser acessível através do caminho (/sales);
  
//   As vendas enviadas devem ser salvas em uma collection do MongoDB;
  
//   Deve ser possível cadastrar a venda de vários produtos através da uma mesma requisição;
  
//   O endpoint deve receber a seguinte estrutura:

// [
//     {
//     "productId": "product_id",
//     "quantity": "product_quantity",
//     },
//     ...
// ]
  

const createSale = async (data) => {
  const sale =  await connection().then((db) => db.collection('sales')
    .insertOne({ itensSold: data }));

  const { insertedId } = sale;

  return {
    _id: insertedId,
    itensSold: data,
  };
};

const getSaleById = (id) =>
  connection().then((db) => db.collection('sales').findOne(ObjectId(id)));

// 7 - Crie um endpoint para atualizar uma venda
// O endpoint deve ser acessível através do caminho (/sales/:id);

// O corpo da requisição deve receber a seguinte estrutura:

// [
//   {
//     "productId": "5f3ff849d94d4a17da707008",
//     "quantity": 3
//   }
// ]
// quantity deve ser um número inteiro maior que 0;

// Apenas a venda com o id presente na URL deve ser atualizada;

const updateSale = (id, data) =>
  connection().then((db) => db.collection('sales')
    .updateOne({ _id: ObjectId(id) }, { $set: { itensSold: data }}));

// 8 - Crie um endpoint para deletar uma venda
// O endpoint deve ser acessível através do caminho (/sales/:id);

// Apenas a venda com o id presente na URL deve ser deletado;

const deleteSale = (id) =>
  connection().then((db) => db.collection('sales')
    .deleteOne({ _id: ObjectId(id) }));

module.exports = {
  getAllSales,
  createSale,
  getSaleById,
  updateSale,
  deleteSale,
};
