const { createUser, getAllUsers } = require('../model/usersModel');

const code400 = 400;
const code409 = 409;

const createNewUser = async (data) => createUser(data);
const getUsers = async () => getAllUsers();

const validateEmail = (email) => {
  const pattern = /\S+@\S+.\S+/;
  return pattern.test(email);
};
// 1 - Crie um endpoint para o cadastro de usuários

// Será validado que o campo "name" é obrigatório
// Se o usuário não tiver o campo "name" o resultado retornado deverá ser
// conforme exibido abaixo, com um status http 400

// Será validado que o campo "email" é obrigatório
// Se o usuário não tiver o campo "email" o resultado retornado deverá ser
// conforme exibido abaixo, com um status http 400
// Será validado que não é possível cadastrar usuário com o campo email inválido (validateEmail)

// Será validado que o campo "senha" é obrigatório
// Se o usuário não tiver o campo "senha" o resultado retornado deverá ser
// conforme exibido abaixo, com um status http 400
const validateUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password || !validateEmail(email)) {
    return res.status(code400).json({ message: 'Invalid entries. Try again.' });
  }

  next();
};

// 1 - Crie um endpoint para o cadastro de usuários
// Será validado que o campo "email" é único 
const checkUniqueEmail = async (req, res, next) => {
  const { email } = req.body;
  const allUsers = await getUsers();
  const emailExists = await allUsers.find((users) => users.email === email);

  if (emailExists) {
    return res.status(code409).json({ message: 'Email already registered' });
  }

  next();
};

module.exports = {
  getUsers,
  createNewUser,
  validateUser,
  checkUniqueEmail,
  validateEmail,
};
