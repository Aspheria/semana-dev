const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);



/**
 * Rota
 */

 /**
  * GET: Buscar info no backend
  * Post: Criar info no backend
  * PUT: Alterar info no backend
  * DELETE: Deletar info no bakend
  */

  /**
   * Tipos de parametros:
   * Query Params: nomeados enviados na rota após o "?" (Filtros paginação "&")
   * Route Params: utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar/alterar recursos
   */

   /**
    * Query-Builder: table('users).select('*').where()
    */


