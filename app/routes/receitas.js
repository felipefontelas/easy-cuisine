//var Controller = require('../controllers/recursos');

//var controller = Controller();

module.exports = function(app) {
   
   var controller = app.controllers.receitas;
   
   app.get('/receitas', controller.listar);
   app.get('/receitas/:id', controller.obterUm);
   app.delete('/receitas/:id', controller.excluir);
   app.put('/receitas', controller.novo);
   app.post('/receitas/', controller.atualizar);
   
}