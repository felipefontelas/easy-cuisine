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

   var controller = {};

   var Usuario = app.models.Usuario;

   controller.listar = function(req, res) {
   
      Usuario.find().exec().then(
         function(usuarios) {       // Callback se der certo
            res.json(usuarios);
         },
         function(erro) {
            console.error(erro);    // Callback se der errado
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );
   
   };

   controller.obterUm = function(req, res) {
      var idUsuario = req.params.id;

      Usuario.findById(idUsuario).exec().then(
         function(usuarios) {
            if(!usuarios) throw new Error('Usuário não encontrada');
            res.json(usuarios);
         },
         function(erro) {
            console.log(erro);
            // HTTP 404: não encontrado
            res.status(404).json(erro);
         }
      );

   }

   controller.excluir = function(req, res) {

      var idUsuario = req.params.id;

      Usuario.remove({_id: idUsuario}).exec().then(
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
       Usuario.create(req.body).exec.then(
           function(usuario){
               res.status(201).json(usuario);
           },
           function(erro){
                console.error(erro)
                res.status(500).json(erro)
           }
       )
   }

   controller.atualizar = function(req, res) {

      console.log(req.body);

      var idUsuario = req.body._id;

      Usuario.findByIdAndUpdate(idUsuario, req.body).then(
         function (usuario) {
            res.status(200).json(usuario);
         },
         function (erro) {
            console.error(erro);
            res.status(404).json('Usuario não encontrada para atualizar');
         }
      );

   }

   return controller;

}