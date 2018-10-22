var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pdSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    category:{
      type: String,
      required: true
    },
    brand:{
      type: String,
      required: true
    },
    price:{
      type: String,
      required: true
    },
    weight:{
      type: String,
      required: true
    },
    detail: {
      body: String,
      image:  String
    }
    
  
});
var Model = mongoose.model('Product', pdSchema);
module.exports = Model;
