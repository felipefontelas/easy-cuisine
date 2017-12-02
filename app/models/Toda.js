var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
      name: {
         type: String,
         required: true
      }
   });

   return mongoose.model('Toda', schema, 'todas');

}