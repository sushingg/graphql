var addUser = require('./add').add;
var removeUser = require('./remove').remove;
var updateUser = require('./update').update;
var addProduct = require('./addpd').add;
var updateDetail = require('./updatedetail').update;
module.exports = {
  addUser,
  removeUser,
  updateUser,
  addProduct,
  updateDetail
  
}