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

   var Ultima = app.models.Ultima;

   controller.listar = function(req, res) {
   
      Ultima.find().exec().then(
         function(ultimas) {       // Callback se der certo
            res.json(ultimas);
         },
         function(erro) {
            console.error(erro);    // Callback se der errado
            // HTTP 500: erro interno do servidor
            res.status(500).json(erro);
         }
      );
   
   };

   controller.obterUm = function(req, res) {
      var idUltima = req.params.id;

      Ultima.findById(idUltima).exec().then(
         function(ultimas) {
            if(!ultimas) throw new Error('Receita não encontrada');
            res.json(ultimas);
         },
         function(erro) {
            console.log(erro);
            // HTTP 404: não encontrado
            res.status(404).json(erro);
         }
      );

   }

   controller.excluir = function(req, res) {

      var idUltima = req.params.id;

      // Filtra o vetor 'recursos', gerando o vetor
      // 'remanescentes' com todos os registros, exceto
      // o que tiver sido excluído
      var remanescentes = ultimas.filter(function(rec) {
         return rec._id != idUltimas;
      });

      // Se houve exclusão, o tamanho do vetor 'remanescentes'
      // será menor do que o do vetor 'recursos'
      if(remanescentes.length < ultimas.length) {
         ultimas = remanescentes;
         res.status(200).send('Ultima receita excluída');
      }
      else {
         res.status(404).send('Ultima receita para exclusão não encontrada');
      }

   }

   return controller;

}