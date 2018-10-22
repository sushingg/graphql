
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require("graphql").GraphQLBoolean;
var GraphQLObjectType = require('graphql').GraphQLObjectType;

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
      type: pdType.pdetail,
    
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