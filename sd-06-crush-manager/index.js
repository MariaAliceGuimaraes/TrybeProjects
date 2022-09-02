const express = require('express');
const { getCrushes, getCrushById, getBySearchTerm } = require('./src/endpoints/get');
const { handleLogin, addCrush } = require('./src/endpoints/post');
const { editCrush } = require('./src/endpoints/put');
const { deleteCrush } = require('./src/endpoints/delete');
const { loginValidator, alterCrushValidator } = require('./src/middlewares/dataValid');
const { tokenAuthenticator } = require('./src/middlewares/tokenAuth');

const app = express();
const SUCCESS = 200;
const PORT = 3000;

app.use(express.json());

// não remover esse endpoint
app.get('/', (_request, response) => {
  response.status(SUCCESS).send();
});

app.get('/crush', getCrushes);
app.get('/crush/search', tokenAuthenticator, getBySearchTerm);
app.get('/crush/:id', getCrushById);

app.post('/login', loginValidator, handleLogin);
app.post('/crush', tokenAuthenticator, alterCrushValidator, addCrush);

app.put('/crush/:id', tokenAuthenticator, alterCrushValidator, editCrush);

app.delete('/crush/:id', tokenAuthenticator, deleteCrush);

app.listen(PORT, () => console.log('Port 3000'));
