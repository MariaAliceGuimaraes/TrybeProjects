const jwt = require('jsonwebtoken');
const { findOneUser } = require('../model/usersModel');
const { secret } = require('../controller/loginController');

const fourHundredOne = 401;

// 7 - Crie um endpoint para a edição de uma receita

// A receita só pode ser atualizada caso o usuário esteja logado e o token JWT validado.

// Será validado que não é possível editar receita sem estar autenticado
// O resultado retornado para editar receita sem autenticação deverá ser
// conforme exibido abaixo, com um status http 401 "missing auth token"

// Será validado que não é possível editar receita com token inválido
// O resultado retornado para editar receita com token inválido deverá ser
// conforme exibido abaixo, com um status http 401 "jwt malformed"

const validateRecipeToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(fourHundredOne).json({ message: 'missing auth token' });

  try {
    const decoded = jwt.verify(token, secret);
    const user = await findOneUser(decoded.data.email);

    if (!user) return res.status(fourHundredOne).json({ message: 'jwt malformed' });

    req.user = user;

    next();
  } catch (err) {
    return res.status(fourHundredOne).json({ message: 'jwt malformed' });
  }
};

module.exports = { validateRecipeToken };
