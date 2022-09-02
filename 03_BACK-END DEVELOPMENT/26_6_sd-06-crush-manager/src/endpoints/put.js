const fs = require('fs').promises;

const SUCCESS = 200;

module.exports = {
  async editCrush(req, res) {
    const { id } = req.params;
    const { name, age, date } = req.body;
    const previousList = await fs.readFile('./crush.json', 'utf-8');
    const previousListJson = JSON.parse(previousList);
    const editedCrush = {
      name,
      age,
      id: +id,
      date,
    };
    const newList = previousListJson.map((crush) => {
      if (crush.id === id) {
        return editedCrush;
      }
      return crush;
    });

    await fs.writeFile('./crush.json', JSON.stringify(newList));
    res.status(SUCCESS).json(editedCrush);
  },
};
