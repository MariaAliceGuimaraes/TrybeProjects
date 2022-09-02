const { Router } = require('express');
const { createToken, validateToken } = require('../middlewares/auth');
const { validateUser } = require('../middlewares/validateUser');
const models = require('../models');
// const { userServices } = require('../Services');

const userRouter = Router();

userRouter.get('/', validateToken, async (_req, res) => {
  const users = await models.User.findAll({});
  return res.status(200).json(users);
});

userRouter.post('/', validateUser, async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const userExists = await models.User.findOne({ where: { email } });
  if (userExists) return res.status(409).json({ message: 'Usuário já existe' });

  const user = await models.User.create({ displayName, email, password, image });
  const token = await createToken(user);

  return res.status(201).json({ token });
});

userRouter.get('/:id', validateToken, async (req, res) => {
  const { id } = req.params;
  const user = await models.User.findOne({ where: { id } });
  if (!user) return res.status(404).json({ message: 'Usuário não existe' });
  return res.status(200).json(user);
});

userRouter.delete('/me', validateToken, async (req, res) => {
  const { email } = req.payload.data;
  const userDeleted = await models.User.destroy({ where: { email } });
  return res.status(204).json(userDeleted);
});

module.exports = userRouter;
