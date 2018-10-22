var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    password:{
      type: String,
      required: true
    },
    tel:{
      type: String
      
    },
    email:{
      type:String
      
    },
    admin:{
      type:Boolean
    }
});
var Model = mongoose.model('User', userSchema);
module.exports = Model;
