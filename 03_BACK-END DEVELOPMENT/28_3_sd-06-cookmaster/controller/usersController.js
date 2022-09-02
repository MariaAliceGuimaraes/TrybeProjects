const { Router } = require('express');
const {
  createNewUser,
  validateUser,
  checkUniqueEmail,
  getUsers,
} = require('../services/usersServices');

const UsersRouter = new Router();

const code200 = 200;
const code201 = 201;

UsersRouter.get('/', async (req, res) => {
  const allUsers = await getUsers();
  res.status(code200).json({ users: allUsers });
});

// 1 - Crie um endpoint para o cadastro de usuários
// Será validado que é possível ao cadastrar usuário, o valor do campo "role" tenha o valor "user"
UsersRouter.post('/', validateUser, checkUniqueEmail, async (req, res) => {
  const user = { ...req.body, role: 'user' };
  await createNewUser(user);
  return res.status(code201).json({ user });
});

module.exports = { UsersRouter }; 
