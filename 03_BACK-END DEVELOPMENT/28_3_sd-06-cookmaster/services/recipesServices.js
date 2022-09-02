const { ObjectId } = require('mongodb');

const {
  createRecipe,
  findAllRecipes,
  findOneRecipe,
  editRecipe,
  deleteRecipe,
} = require('../model/recipesModel');

const code400 = 400;
// const code401 = 401;
const code404 = 404;

// 4 - Crie um endpoint para a listagem de receitas
// Será validado que é possível listar todas as receitas sem estar autenticado
// Será validado que é possível listar todas as receitas estando autenticado
const createNewRecipe = async (data) => createRecipe(data);

// 5 - Crie um endpoint para visualizar uma receita específica
// A rota pode ser acessada por usuários logados ou não
const getAllRecipes = async () => findAllRecipes();
const getRecipeById = async (id) => findOneRecipe(id);

// 5 - Crie um endpoint para visualizar uma receita específica
const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(code404).json({
    message: 'recipe not found',
    });
  }

  next();
};

// 3 - Crie um endpoint para o cadastro de receitas

// Será validado que não é possível cadastrar receita sem o campo "name"
// Se a receita não tiver o campo "name" o resultado retornado deverá ser
// conforme exibido abaixo, com um status http 400

// Será validado que não é possível cadastrar receita sem o campo "ingredients"
// Se a receita não tiver o campo "ingredients" o resultado retornado deverá ser
// conforme exibido abaixo, com um status http 400

// Será validado que não é possível cadastrar receita sem o campo "preparation"
// Se a receita não tiver o campo "preparation" o resultado retornado deverá ser
// conforme exibido abaixo, com um status http 400

const validateRecipe = async (req, res, next) => {
  const { name, ingredients, preparation } = req.body;

  if (!name || !ingredients || !preparation) {
    return res.status(code400).json({
      message: 'Invalid entries. Try again.',
    });
  }

  next();
};

// 7 - Crie um endpoint para a edição de uma receita

// A receita só pode ser atualizada caso o usuário esteja logado e o token JWT validado.
// A receita só pode ser atualizada caso pertença ao usuário logado, ou caso esse usuário seja um admin.
// O corpo da requisição deve receber o seguinte formato:
// {
//   "name": "string",
//   "ingredients": "string",
//   "preparation": "string"
// }

const putRecipe = async (id, name, ingredients, preparation) => {
  editRecipe(id, name, ingredients, preparation);
};

// 8 - Crie um endpoint para a exclusão de uma receita
// A receita só pode ser excluída caso o usuário esteja logado e o token JWT validado.
// A receita só pode ser excluída caso pertença ao usuário logado, ou caso o usuário logado seja um admin.

const delRecipe = async (id) => deleteRecipe(id);

module.exports = {
  createNewRecipe,
  validateRecipe,
  getAllRecipes,
  getRecipeById,
  validateId,
  putRecipe,
  delRecipe,
};
