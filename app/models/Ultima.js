var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      name: {
         type: String,
         required: true
      },
      username: {
          type: String,
          required: true
      }
   });

   return mongoose.model('Ultima', schema, 'ultimas');

}