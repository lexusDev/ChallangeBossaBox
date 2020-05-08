const express = require('express');
const ToolsController = require('./controllers/ToolsController');

const routes = express.Router();

routes.get('/', ToolsController.index);
routes.get('/tools', ToolsController.show);
routes.post('/tools', ToolsController.store);
routes.delete('/tools/:id', ToolsController.delete);

module.exports = routes;