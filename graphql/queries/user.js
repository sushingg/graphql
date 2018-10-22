
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;
var UserModel = require('../../models/user');
var userType = require('../types/user').userType;
var pdModel = require('../../models/product');
var pdType = require('../types/product').pdType;
// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: function () {
          const users = UserModel.find().exec()
          if (!users) {
            throw new Error('Error')
          }
          return users
        }
      },
      
      product: {
        type: new GraphQLList(pdType),
        resolve: function () {
          const product = pdModel.find().exec()
          if (!product) {
            throw new Error('Error')
          }
          return product
        }
      }
      
    }
  }
});

