const productsModules = require('../modules/productsModules');
const { ObjectId } = require('mongodb');

const maxLength = 5;
const ZERO = 0;
const invalidData = 422;

const productExists = async (req, res, next) => {
  const { name } = req.body;
  const allProducts = await productsModules.getAllProducts();

  if (allProducts.find((product) => product.name === name) !== undefined) {
    return res.status(invalidData).json( { err: {
      code: 'invalid_data',
      message: 'Product already exists',
    }});
  };

  next();
};

const validateProduct = async (req, res, next) => {
  const { name, quantity } = req.body;

  if (name.length <= maxLength) {
    return res.status(invalidData).json( { err: {
      code: 'invalid_data',
      message: '"name" length must be at least 5 characters long',
    }});
  } else if (typeof name !== 'string') {
    return res.status(invalidData).json( { err: {
      code: 'invalid_data',
      message: '"name" length must be a string',
    }});
  }

  if (quantity <= ZERO) {
    return res.status(invalidData).json( { err: {
      code: 'invalid_data',
      message: '"quantity" must be larger than or equal to 1',
    }});
  } else if (typeof quantity !== 'number') {
    return res.status(invalidData).json( { err: {
      code: 'invalid_data',
      message: '"quantity" must be a number',
    }});
  };

  next();

};

const validateId = async (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) return res.status(invalidData).json({
    err: {
      code: 'invalid_data',
      message: 'Wrong id format',
    },
  });

  next();
};

module.exports = {
  validateProduct,
  validateId,
  productExists,
};
