const UNAUTHORIZED = 401;

module.exports = {
  tokenAuthenticator(req, res, next) {
    const { authorization } = req.headers;
    const minimumTokenLength = 16;

    if (!authorization) {
      return res.status(UNAUTHORIZED).json({ message: 'Token não encontrado' });
    }
    if (authorization.length !== minimumTokenLength) {
      return res.status(UNAUTHORIZED).json({ message: 'Token inválido' });
    }
    return next();
  },
};
