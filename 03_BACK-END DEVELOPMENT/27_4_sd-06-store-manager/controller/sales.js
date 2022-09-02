const { Router } = require('express');
const salesModules = require('../modules/salesModules');
const { ObjectId } = require('mongodb');
const {
  validateSales,
  validateId,
  validateDeleteId } = require('../services/salesServices');

const salesRouter = new Router();

const SUCESS = 200;
const NOT_FOUND = 404;
const invalidData = 422;


// 5 - Crie um endpoint para cadastrar vendas
// O endpoint deve ser acessível através do caminho (/sales);

// As vendas enviadas devem ser salvas em uma collection do MongoDB;

// Deve ser possível cadastrar a venda de vários produtos através da uma mesma requisição;

// O endpoint deve receber a seguinte estrutura:

// aqui chamamos o salesModules

salesRouter.post('/', validateSales, async (req, res) =>  {
  const sale = await salesModules.createSale(req.body);
  res.status(SUCESS).json(sale);
});


// 6 - Crie um endpoint para listar as vendas
// O endpoint deve ser acessível através do caminho (/sales) ou (/sales/:id);

// Através do caminho /sales, todas as vendas devem ser retornadas;

// Através do caminho /sales/:id, apenas a venda com o id presente na URL deve ser retornada;

// chamamos getAllSales

salesRouter.get('/', async (_req, res) => {
  const allSales = await salesModules.getAllSales();
  res.status(SUCESS).json({ sales: allSales });
});

salesRouter.get('/:id', validateId, async (req, res) => {
  const { id } = req.params;

  const saleFound = await salesModules.getSaleById(id);

  if (!saleFound) return res.status(NOT_FOUND).json({
    err: {
      code: 'not_found',
      message: 'Sale not found',
    }
  });

  res.status(SUCESS).json(saleFound);
});


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

// aqui chamamos updateSale

salesRouter.put('/:id', validateId, validateSales, async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  await salesModules.updateSale(id, data);

  const saleUpdated = {
    _id: ObjectId(id),
    itensSold: data,
  };

  res.status(SUCESS).json(saleUpdated);
});


// 8 - Crie um endpoint para deletar uma venda
// O endpoint deve ser acessível através do caminho (/sales/:id);

// Apenas a venda com o id presente na URL deve ser deletado;

// aqui chamamos getSaleById e depois deleteSale

salesRouter.delete('/:id', validateDeleteId, async (req, res) => {
  const { id } = req.params;
  const saleDeleted = await salesModules.getSaleById(id);

  await salesModules.deleteSale(id);

  res.status(SUCESS).json(saleDeleted);
});

module.exports = { salesRouter };
