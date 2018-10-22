
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require("graphql").GraphQLBoolean;


var pdetail = require('../types/productdetail');
var pdType = require('../types/product');
var pdModel = require('../../models/product');

exports.add = {
  type: pdType.pdType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    category:{
      type: new GraphQLNonNull(GraphQLString),
    },
    brand:{
      type: new GraphQLNonNull(GraphQLString),
    },
    price:{
      type: new GraphQLNonNull(GraphQLString),
    },
    weight:{
      type: new GraphQLNonNull(GraphQLString),
    },
    detail:{
      type: new GraphQLNonNull(pdetail.pdInputType),
    }

    
  },
  resolve(root, params) {
    const pModel = new pdModel(params);
    const newProduct = pModel.save();
    if (!newProduct) {
      throw new Error('Error');
    }
    return newProduct
  }
}

/* mutation{addProduct(name:"RTX-2080",category:"GPU",price:"999",brand:"Nvidia",weight:"10",detail:{body:"555",image:"picture"}){
  id
  name
  detail{body,image}
}
}*/
