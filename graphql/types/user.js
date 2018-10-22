

var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require("graphql").GraphQLBoolean;

// User Type
exports.userType = new GraphQLObjectType({
  name: 'user',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: GraphQLString
      },
      password:{
        type: GraphQLString
      },
      tel:{
        type: GraphQLString
      },
      email:{
        type: GraphQLString
      },
      admin:{
        type: GraphQLBoolean
      }
    }
  }
});

