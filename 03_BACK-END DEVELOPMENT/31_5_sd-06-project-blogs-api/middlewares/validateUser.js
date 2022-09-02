const validateName = (name) => name.length < 8;

const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const validateUser = (req, res, next) => {
  const { displayName, email, password } = req.body;
  let message;
  if (validateName(displayName)) {
    message = '"displayName" length must be at least 8 characters long';
    return res.status(400).json({ message });
  }
  if (!email) {
    message = '"email" is required';
    return res.status(400).json({ message });
  }
  if (!validateEmail(email)) {
    message = '"email" must be a valid email';
    return res.status(400).json({ message });
  }
  if (!password) {
    message = '"password" is required';
    return res.status(400).json({ message });
  }
  if (String(password).length < 6) {
    message = '"password" length must be 6 characters long';
    return res.status(400).json({ message });
  }
  return next();
};

module.exports = { validateUser };
