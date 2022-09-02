const { findOneUser } = require('../model/usersModel');
const { validateEmail } = require('./usersServices');

const getUserByEmail = async (email) => findOneUser(email);

// 2 - Crie um endpoint para o login de usuários

// Será validado que não é possível fazer login com um email inválido
// Se o login tiver o email inválido o resultado retornado deverá ser
// conforme exibido abaixo, com um status http 401

// Será validado que não é possível fazer login com uma senha inválida
// Se o login tiver a senha inválida o resultado retornado deverá ser
// conforme exibido abaixo, com um status http 401

const checkUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Incorrect username or password' });
  }
  next();
};

// 2 - Crie um endpoint para o login de usuários

// Será validado que o campo "email" é obrigatório
// Se o login não tiver o campo "email" o resultado retornado deverá ser
// conforme exibido abaixo, com um status http 401

// Será validado que o campo "password" é obrigatório
// Se o login não tiver o campo "password" o resultado retornado deverá ser
// conforme exibido abaixo, com um status http 401

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ message: 'All fields must be filled' });
  } 
  if (!validateEmail(email)) {
    return res.status(401).json({ message: 'Incorrect username or password' });
  }
  next();
};

module.exports = {
  getUserByEmail,
  checkUser,
  validateLogin,
};
