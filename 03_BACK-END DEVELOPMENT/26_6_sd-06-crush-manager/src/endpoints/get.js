const fs = require('fs').promises;

const SUCCESS = 200;
const NOT_FOUND = 404;
const emptyCrushList = [];
const firstIndex = 0;
const minimumLength = 1;

module.exports = {
  async getCrushes(_req, res) {
    const data = await fs.readFile('./crush.json', 'utf-8');

    if (data) {
      return res.status(SUCCESS).send(JSON.parse(data));
    }
    return res.status(SUCCESS).send(emptyCrushList);
  },

  async getCrushById(req, res) {
    const crushId = +req.params.id;
    const data = await fs.readFile('./crush.json', 'utf-8');
    const selectedCrush = JSON.parse(data).filter((crush) => crush.id === crushId);

    if (selectedCrush.length >= minimumLength) {
      return res.status(SUCCESS).send(selectedCrush[firstIndex]);
    }
    return res.status(NOT_FOUND).json({ message: 'Crush não encontrado' });
  },

  async getBySearchTerm(req, res) {
    const searchTerm = req.query.q;
    const previousList = await fs.readFile('./crush.json', 'utf-8');
    const previousListJson = JSON.parse(previousList);
    const crushFound = previousListJson
      .filter((crush) => crush.name.includes(searchTerm));
    if (!searchTerm || searchTerm === '') {
      return res.status(SUCCESS).json(previousListJson);
    }
    return res.status(SUCCESS).json(crushFound);
  },
};
