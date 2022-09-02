const { Router } = require('express');
const { validateToken } = require('../middlewares/auth');
const validatePost = require('../middlewares/validatePost');
const models = require('../models');

const postsRouter = Router();

postsRouter.get('/', validateToken, async (req, res) => {
  const { id } = req.payload.data;
  const posts = await models.BlogPosts.findAll({
    where: { userId: id },
    attributes: { exclude: 'userId' },
    include: { model: models.User, as: 'user', attributes: { exclude: 'password' } },
  });
  return res.status(200).json(posts);
});

postsRouter.post('/', validateToken, validatePost, async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.payload.data;
  try {
    const post = await models.BlogPosts.create({ title, content, userId: id });
    return res.status(201).json(post);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});

postsRouter.get('/:id', validateToken, async (req, res) => {
  const { id: userId } = req.payload.data;
  const { id } = req.params;

  const posts = await models.BlogPosts.findOne({
    where: { userId, id },
    attributes: { exclude: 'userId' },
    include: { model: models.User, as: 'user', attributes: { exclude: 'password' } },
  });
  if (!posts) return res.status(404).json({ message: 'Post não existe' });
  return res.status(200).json(posts);
});

postsRouter.put('/:id', validateToken, validatePost, async (req, res) => {
  const { title, content } = req.body;
  const { id: userId } = req.payload.data;
  const { id } = req.params;

  const editedPost = await models.BlogPosts.findOne({ where: { id } });
  if (editedPost.userId !== userId) return res.status(401).json({ message: 'Usuário não autorizado' });
  editedPost.title = title;
  editedPost.content = content;
  await editedPost.save();
  return res.status(200).json({ title, content, userId });
});

postsRouter.delete('/:id', validateToken, async (req, res) => {
  const { id: userId } = req.payload.data;
  const { id } = req.params;

  const post = await models.BlogPosts.findOne({ where: { id } });
  if (!post) return res.status(404).json({ message: 'Post não existe' });
  if (post.userId !== userId) return res.status(401).json({ message: 'Usuário não autorizado' });
  await models.BlogPosts.destroy({ where: { id } });
  return res.status(204).send();
});

module.exports = postsRouter;
