const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");


const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get("/profile", ProfileController.index);

routes.post("/sessions", SessionController.create);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete('/incidents:/id', IncidentController.delete )


//assim se exporta uma variavel de dentro de um file
module.exports = routes;