module.exports = function() {

   var controller = {}; // Objeto vazio

   controller.index = function(req, res) {
      res.render('index', {nome: 'Easy Cuisine'});
   }

   controller.ajuda = function(req, res) {
      res.render('ajuda');   
   }

   controller.login = function(req, res) {
      res.render('login', {
         nome: 'Easy Cuisine',
         mensagem: 'Informe seus dados para autenticação'
      });
   }

   return controller;

}