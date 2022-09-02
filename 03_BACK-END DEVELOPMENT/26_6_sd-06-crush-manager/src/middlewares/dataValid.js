const BAD_REQUEST = 400;

module.exports = {
  loginValidator(req, res, next) {
    const emailValidationRegex = /\S+@\S+\.\S+/;
    const { email, password } = req.body;
    const validatedEmail = emailValidationRegex.test(email);

    if (!email) {
      return res.status(BAD_REQUEST)
        .json({ message: 'O campo "email" é obrigatório' });
    }
    if (!validatedEmail) {
      return res.status(BAD_REQUEST)
        .json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }

    if (!password || password.length === 0) {
      return res.status(BAD_REQUEST)
        .json({ message: 'O campo "password" é obrigatório' });
    }
    if (password.length < 6) {
      return res.status(BAD_REQUEST)
        .json({ message: 'A "senha" deve ter pelo menos 6 caracteres' });
    }
    return next();
  },

  alterCrushValidator(req, res, next) {
    const dateValidationRegex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
    const { name, age, date } = req.body;

    if (!name) {
      return res.status(BAD_REQUEST)
        .json({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length < 3) {
      return res.status(BAD_REQUEST)
        .json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }

    if (!age) {
      return res.status(BAD_REQUEST)
        .json({ message: 'O campo "age" é obrigatório' });
    }
    if (age < 18) {
      return res.status(BAD_REQUEST)
        .json({ message: 'O crush deve ser maior de idade' });
    }

    if (date) {
      if (date.rate < 1 || date.rate > 5) {
        return res.status(BAD_REQUEST)
          .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
      }
    }

    if (!date || !date.datedAt || !date.rate) {
      return res.status(BAD_REQUEST)
        .json({
          message: 'O campo "date" é obrigatório e "datedAt" e "rate" não podem ser vazios',
        });
    }
    if (date) {
      const validatedDate = dateValidationRegex.test(date.datedAt);

      if (!validatedDate) {
        return res.status(BAD_REQUEST)
          .json({ message: 'O campo "datedAt" deve ter o formato "dd/mm/aaaa"' });
      }
    }
    return next();
  },
};
