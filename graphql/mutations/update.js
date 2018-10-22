var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLBoolean = require("graphql").GraphQLBoolean;

var UserType = require('../types/user');
var UserModel = require('../../models/user');

exports.update = {
  type: UserType.userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      name: 'name',
      type: GraphQLString
    },
    password:{
      name: 'password',
      type: GraphQLString
    },
    tel:{
      name: 'telephone number',
      type: GraphQLString
    },
    email:{
      name: 'email address',
      type: GraphQLString
    },
    admin:{
      name: 'admin state',
      type: GraphQLBoolean
    }
  },
  resolve(root, params) {
    

    return UserModel.findByIdAndUpdate(
      params.id,
      { $set: { name: params.name,password: params.password ,tel: params.tel, email: params.email, admin: params.admin} },
      { new: true }
    )
      .catch(err => new Error(err));
      

  }
}

