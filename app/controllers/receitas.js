/*
var recursos = [
   {
      '_id': 1,
      'descricao': 'Projetor 1',
      'tipo': 'Projetor'
   },
   {
      '_id': 2,
      'descricao': 'Laboratório 3',
      'tipo': 'Laboratório de computadores'
   },
   {
      '_id': 3,
      'descricao': 'Controle remoto ADS 2',
      'tipo': 'Controle remoto de TV'
   },
   {
      '_id': 4,
      'descricao': 'Laboratório 1',
      'tipo': 'Laboratório de computadores'
   }
];
*/

module.exports = function(app) {

   var Receita = app.models.Receita;

   var controller = {};

   controller.listar = function(req, res) {
   
      Receita.find().exec().then(
         function(receitas) {       // Callback se der certo
            res.json(receitas);
         },
         function(erro) {
            console.error(erro);    // Callback se der errado
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );
   
   };

   controller.obterUm = function(req, res) {
      var idReceita = req.params.id;

      Receita.findById(idReceita).then(
         function(receita) {
            res.json(receita);
         },
         function(erro) {
            console.error(erro);
            res.status(404).send('Receita não encontrado');   
         }
      );

   }

   controller.excluir = function(req, res) {

      var idReceita = req.params.id;

      Receita.remove({_id: idReceita}).exec().then(
         function() {
            // HTTP 204: OK, sem conteúdo
            res.status(204).end();
         },
         function(erro) {
            console.error(erro);
         }
      );

   }

   controller.novo = function(req, res){
       Receita.create(req.body).exec.then(
           function(receita){
               res.status(201).json(receita);
           },
           function(erro){
                console.error(erro)
                res.status(500).json(erro)
           }
       )
   }

   controller.atualizar = function(req, res) {

      console.log(req.body);

      var idReceita = req.body._id;

      Receita.findByIdAndUpdate(idReceita, req.body).then(
         function (receita) {
            res.status(200).json(receita);
         },
         function (erro) {
            console.error(erro);
            res.status(404).json('Receita não encontrada para atualizar');
         }
      );

   }

   return controller;

}