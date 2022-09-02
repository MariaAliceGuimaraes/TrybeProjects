const salesModules = require('../modules/salesModules');
const { ObjectId } = require('mongodb');

const ZERO = 0;
const invalidData = 422;
const NOT_FOUND = 404;

const validateSales = async (req, res, next) => {
  const sales = req.body;

  sales.forEach((sale) => {
    if (sale.quantity <= ZERO || typeof sale.quantity !== 'number') {
      return res.status(invalidData).json( { err: {
        code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity',
      }});
    }
  });

  next();

};

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) return res.status(NOT_FOUND).json({
    err: {
      code: 'not_found',
      message: 'Sale not found',
    },
  });

  next();
};

const validateDeleteId = (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) return res.status(invalidData).json({
    err: {
      code: 'invalid_data',
      message: 'Wrong sale ID format',
    }
  });

  next();
};

module.exports = {
  validateSales,
  validateId,
  validateDeleteId,
};
