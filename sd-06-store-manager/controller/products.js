const { Router } = require('express');
const { ObjectId } = require('mongodb');
const productsModules = require('../modules/productsModules');
const {
  validateProduct,
  validateId,
  productExists } = require('../services/productsServices');

const productsRouter = new Router();

const SUCESS = 200;
const createSucess = 201;
const invalidData = 422;

// 1 - Crie um endpoint para o cadastro de produtos
// O endpoint deve ser acessível através do caminho (/products);

// Os produtos enviados devem ser salvos em uma collection do MongoDB;

// O endpoint deve receber a seguinte estrutura:
// {
//     "name": "product_name",
//     "quantity": "product_quantity"
//   }

// aqui chamamos o productsModules

productsRouter.post('/', productExists, validateProduct, async (req, res) => {
  await productsModules.createProduct(req.body);
  res.status(createSucess).json(req.body);
});

productsRouter.get('/', async (_req, res) => {
  const allProducts = await productsModules.getAllProducts();
  res.status(SUCESS).json({ products: allProducts });
});


// 2 - Crie um endpoint para listar os produtos
// O endpoint deve ser acessível através do caminho (/products) ou (/products/:id);

// Através do caminho /products, todos os produtos devem ser retornados;

// Através do caminho /products/:id, apenas o produto com o id presente na URL deve ser retornado;

productsRouter.get('/:id', validateId, async (req, res) => {
  const { id } = req.params;

  const productFound =  await productsModules.getProductById(id);

  if (!productFound) {
    res.status(invalidData).json({ err:
      { code: 'invalid_data', message: 'Wrong id format'}
    });
  }

  res.status(SUCESS).json(productFound);
});


// 3 - Crie um endpoint para atualizar um produto
// O endpoint deve ser acessível através do caminho (/products/:id);

// O corpo da requisição deve seguir a mesma estrutura do método responsável por adicionar um produto;

// Apenas o produto com o id presente na URL deve ser atualizado;

productsRouter.put('/:id', validateId, validateProduct, async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;

  await productsModules.updateProduct(id, name, quantity);

  const productUpdated = {
    _id: ObjectId(id),
    name,
    quantity,
  };

  res.status(SUCESS).json(productUpdated);
});


// 4 - Crie um endpoint para deletar um produto
// O endpoint deve ser acessível através do caminho (/products/:id);

// Apenas o produto com o id presente na URL deve ser deletado;

productsRouter.delete('/:id', validateId, async (req, res) => {
  const { id } = req.params;
  const productDeleted = await productsModules.getProductById(id);

  await productsModules.deleteProduct(id);

  res.status(SUCESS).json(productDeleted);
});

module.exports = { productsRouter };
