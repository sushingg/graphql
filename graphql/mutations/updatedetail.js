var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require("graphql").GraphQLBoolean;

var pdType = require('../types/product');
var pdModel = require('../../models/product');

exports.update = {
  type: pdType.pdType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    body: {
      name: 'body',
      type: GraphQLString
    },
    image:{
      name: 'image',
      type: GraphQLString
    }
  },
  resolve(root, params) {
    

    return pdModel.findByIdAndUpdate(
      params.id,
      { $set: { detail:{body: params.body ,image: params.image} } },
      { new: true }
    )
      .catch(err => new Error(err));
      

  }
}

