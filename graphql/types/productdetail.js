
var GraphQLInputObjectType = require('graphql').GraphQLInputObjectType;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require("graphql").GraphQLBoolean;

// User Type
exports.pdetail = new GraphQLObjectType({
                    name: 'detail',
                    fields: function () {
                      return {
                        body: {
                          type: GraphQLString
                        },
                        image: {
                          type: GraphQLString
                        }
                      }
                    }
                  });

exports.pdInputType = new GraphQLInputObjectType({
  name: 'ProductDetailInput',
  description: 'Input product detail payload',
  fields: () => ({
    body: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    }
  }),
});

