const { Router } = require('express');
const { getUserByEmail } = require('../services/loginServices');
const { validateToken } = require('../auth/validateToken');
const { validateRecipeToken } = require('../auth/validateJWTRecipes');
const {
  validateRecipe,
  createNewRecipe,
  getAllRecipes,
  getRecipeById,
  validateId,
  putRecipe,
  delRecipe,
} = require('../services/recipesServices');

const RecipesRouter = new Router();

const code200 = 200;
const code201 = 201;
const code204 = 204;
const code404 = 404;

// 4 - Crie um endpoint para a listagem de receitas

// Será validado que é possível listar todas as receitas sem estar autenticado
// Será validado que é possível listar todas as receitas estando autenticado
// O resultado retornado para listar receitas com sucesso deverá ser
// conforme exibido abaixo, com um status http 200

RecipesRouter.get('/', async (req, res) => {
  const allRecipes = await getAllRecipes();
  return res.status(200).json(allRecipes);
});

// 5 - Crie um endpoint para visualizar uma receita específica
// A rota deve ser (/recipes/:id).

// Será validado que não é possível listar uma receita que não existe
// O resultado retornado para listar uma receita que não existe deverá ser
// conforme exibido abaixo, com um status http 404

RecipesRouter.get('/:id', validateId, async (req, res) => {
  const { id } = req.params;
  const recipe = await getRecipeById(id);
  if (!recipe) {
    return res.status(code404).json({
      message: 'recipe not found',
    });
  }
  return res.status(code200).json(recipe);
});

// 3 - Crie um endpoint para o cadastro de receitas
// A receita só pode ser criada caso o usuário esteja logado e o token JWT validado.
RecipesRouter.post('/', validateToken, validateRecipe, async (req, res) => {
  const { email } = req.user;
  const user = await getUserByEmail(email);
  const { _id } = user;
  const recipe = {
    ...req.body,
    userId: _id,
  };

  await createNewRecipe(recipe);

  return res.status(code201).json({ recipe });
});

// 8 - Crie um endpoint para a exclusão de uma receita
// A rota deve ser (/recipes/:id).

// A receita só pode ser excluída caso o usuário esteja logado e o token JWT validado.
// A receita só pode ser excluída caso pertença ao usuário logado, ou caso o usuário logado seja um admin.

RecipesRouter.delete('/:id', validateRecipeToken, async (req, res) => {
  const { id } = req.params;
  console.log('cheguei aqui', id);
  await delRecipe(id);

  return res.status(code204).json();
});

// 7 - Crie um endpoint para a edição de uma receita
// A rota deve ser (/recipes/:id).

// A receita só pode ser atualizada caso o usuário esteja logado e o token JWT validado.
// A receita só pode ser atualizada caso pertença ao usuário logado, ou caso esse usuário seja um admin.

RecipesRouter.put('/:id', validateRecipeToken, async (req, res) => {
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;

  const oldRecipe = await putRecipe(id, name, ingredients, preparation);

  const editedRecipe = { ...oldRecipe, name, ingredients, preparation };

  return res.status(code200).json(editedRecipe);
});

module.exports = { RecipesRouter }; 
