const jwt = require('jsonwebtoken');
const { findOneUser } = require('../model/usersModel');
const { secret } = require('../controller/loginController');

const fourHundredOne = 401;

// 3 - Crie um endpoint para o cadastro de receitas

// Será validado que não é possível cadastrar uma receita com token invalido
// Se a receita não tiver o token válido o resultado retornado deverá ser
// conforme exibido abaixo, com um status http 401

const validateToken = async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, secret);
    const user = await findOneUser(decoded.data.email);

    if (!user) {
      return res.status(fourHundredOne).json({ message: 'jwt malformed' });
    }

    req.user = decoded.data;
  } catch (err) {
    return res.status(fourHundredOne).json({ message: 'jwt malformed' });
  }

  next();
};

module.exports = { validateToken };
