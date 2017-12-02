var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      name: {
         type: String,
         required: true
      },
      difficulty: {
         type: String,
         required: true,
      },
      prepare: {
         type: String,
         required: true
      },
      taste: {
         type: String,
         required: true,
      },
      ingredients: {
          type: String,
          required: true
      }
   });

   return mongoose.model('Receita', schema, 'receitas');

}