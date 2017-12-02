//var Controller = require('../controllers/recursos');

//var controller = Controller();

module.exports = function(app) {
   
   var controller = app.controllers.todas;
   
   app.get('/todas', controller.listar);
   app.get('/todas/:id', controller.obterUm);
   app.delete('/todas/:id', controller.excluir);
}