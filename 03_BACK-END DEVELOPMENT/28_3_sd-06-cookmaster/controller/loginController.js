const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { checkUser, validateLogin, getUserByEmail } = require('../services/loginServices');

const secret = 'bananinha';

const LoginRouter = new Router();

LoginRouter.get('/', async (req, res) => res.status(200).json('login router'));

// 2 - Crie um endpoint para o login de usuários
// A rota deve receber os campos Email e Senha e esses campos devem ser validados no banco de dados.
// Um token JWT deve ser gerado e retornado caso haja sucesso no login.
// No seu payload deve estar presente o id, email e role do usuário.
LoginRouter.post('/', validateLogin, checkUser, async (req, res) => {
  const { email } = req.body;
  const user = await getUserByEmail(email);
  const data = {
    id: user.id,
    email: user.email,
    role: user.role,
  };
  const token = jwt.sign({ data }, secret);

  res.status(200).json({ token });
});

module.exports = {
    LoginRouter,
    secret,
  };
