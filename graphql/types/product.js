

var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require("graphql").GraphQLBoolean;
var pdetail = require('../types/productdetail');
// User Type
exports.pdType = new GraphQLObjectType({
  name: 'product',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: GraphQLString
      },
      category:{
        type: GraphQLString
      },
      brand:{
        type: GraphQLString
      },
      price:{
        type: GraphQLString
      },
      weight:{
        type: GraphQLString
      },
      detail:{
        type: pdetail.pdetail
        
      }
    }
  }
});

