//var Controller = require('../controllers/recursos');

//var controller = Controller();

module.exports = function(app) {
   
   var controller = app.controllers.ultimas;
   
   app.get('/ultimas', controller.listar);
   app.get('/ultimas/:id', controller.obterUm);
   app.delete('/ultimas/:id', controller.excluir);
}