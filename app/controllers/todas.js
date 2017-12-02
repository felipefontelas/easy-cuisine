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

   var Toda = app.models.Toda;

   controller.listar = function(req, res) {
   
      Toda.find().exec().then(
         function(todas) {       // Callback se der certo
            res.json(todas);
         },
         function(erro) {
            console.error(erro);    // Callback se der errado
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );
   
   };

   controller.obterUm = function(req, res) {
      var idToda = req.params.id;

      Toda.findById(idToda).exec().then(
         function(todas) {
            if(!todas) throw new Error('Não foram encontradas receitas');
            res.json(todas);
         },
         function(erro) {
            console.log(erro);
            // HTTP 404: não encontrado
            res.status(404).json(erro);
         }
      );

   }

   controller.excluir = function(req, res) {

      var idToda = req.params.id;

      // Filtra o vetor 'recursos', gerando o vetor
      // 'remanescentes' com todos os registros, exceto
      // o que tiver sido excluído
      var remanescentes = todas.filter(function(rec) {
         return rec._id != idToda;
      });

      // Se houve exclusão, o tamanho do vetor 'remanescentes'
      // será menor do que o do vetor 'recursos'
      if(remanescentes.length < todas.length) {
         todas = remanescentes;
         res.status(200).send('Receita excluída');
      }
      else {
         res.status(404).send('Receita para exclusão não encontrado');
      }

   }

   return controller;

}