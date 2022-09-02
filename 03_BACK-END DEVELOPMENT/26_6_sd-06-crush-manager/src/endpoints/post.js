const fs = require('fs').promises;
const randomString = require('randomstring');

const SUCCESS = 200;
const CREATED = 201;

module.exports = {
  handleLogin(_req, res) {
    const newToken = randomString.generate(16);
    const generatedToken = { token: newToken };
    return res.status(SUCCESS).json(generatedToken);
  },

  async addCrush(req, res) {
    const { name, age, date } = req.body;
    const previousList = await fs.readFile('./crush.json', 'utf-8');
    const previousListJson = JSON.parse(previousList);
    const newId = previousListJson.length + 1;
    const newCrush = {
      name,
      age,
      id: newId,
      date,
    };
    const newList = previousListJson.concat(newCrush);

    await fs.writeFile('./crush.json', JSON.stringify(newList));
    return res.status(CREATED).json(newCrush);
  },
};
