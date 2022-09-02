require('dotenv').config();
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'segredissimo';
const config = { algorithm: 'HS256', expiresIn: '7d' };

const createToken = (payload) => jwt.sign(payload.dataValues, SECRET, config);
const verifyToken = (token) => jwt.verify(token, SECRET);

const validateToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  try {
    const payload = verifyToken(req.headers.authorization, SECRET);
    req.payload = payload;
  } catch (err) {
    return res.status(401).json({ message: 'Token expirado ou inválido' });
  }

  return next();
};

module.exports = {
  createToken,
  verifyToken,
  SECRET,
  config,
  validateToken,
};
