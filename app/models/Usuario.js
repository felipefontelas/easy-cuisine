var mongoose = require('mongoose');

module.exports = function() {

   var schema = mongoose.Schema({
    email: {
        type: String,
        required: true
    }, 
    name: {
         type: String,
         required: true
      },
    pass: {
          type: Number,
          required: true
    },
    dataInclusao: {
          type: Date,
          default: Date.now
    }

   });

   return mongoose.model('Usuario', schema, 'usuarios');


}