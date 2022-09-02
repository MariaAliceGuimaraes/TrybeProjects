const fs = require('fs').promises;

const SUCCESS = 200;

module.exports = {
  async deleteCrush(req, res) {
    const { id } = req.params;
    const previousList = await fs.readFile('./crush.json', 'utf-8');
    const previousListJson = JSON.parse(previousList);
    const newList = previousListJson.filter((crush) => crush.id !== id);

    await fs.writeFile('./crush.json', JSON.stringify(newList));
    return res.status(SUCCESS).json({ message: 'Crush deletado com sucesso' });
  },
};
