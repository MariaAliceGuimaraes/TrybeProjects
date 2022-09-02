const { ObjectId } = require('mongodb');
const connection = require('./connection');

// req 4
const findAllRecipes = async () => connection()
  .then((db) => db.collection('recipes').find().toArray());

// req 3
const createRecipe = (data) => connection()
  .then((db) => db.collection('recipes').insertOne(data));

// req 5
const findOneRecipe = async (id) => connection()
.then((db) => db.collection('recipes').findOne(ObjectId(id)));

// req 7
const editRecipe = (id, name, ingredients, preparation) => connection()
  .then((db) => db.collection('recipes').findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: { name, ingredients, preparation } },
  ));

// req 8
const deleteRecipe = async (id) => connection()
  .then((db) => db.collection('recipes').deleteOne({ _id: ObjectId(id) }));

module.exports = { 
  createRecipe,
  findAllRecipes,
  findOneRecipe,
  editRecipe,
  deleteRecipe,
};
