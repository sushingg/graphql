const express = require("express");
const mongoose = require('./config/mongoose');
const graphqlHTTP = require("express-graphql");

const cors = require("cors");
const db = mongoose();
const app = express();
//log
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

var bodyParser  = require('body-parser');
var jwt    = require('jsonwebtoken');
app.set('superSecret', process.env.SECRET);

var port = process.env.PORT || 8080;        // set our port

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// setup the logger
// log only 4xx and 5xx responses to console
app.use(morgan('short'))

// log all requests to access.log
//app.use(morgan('combined', {
//  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
//}))

var User = require('./models/user');


//////////////////////////////////
// get an instance of the router for api routes
var apiRoutes = express.Router(); 

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.post('/authenticate', function(req, res) {

  // find the user
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token with only our given payload
    // we don't want to pass in the entire user since that has the password
    const payload = {
      id: user.id,
      admin: user.admin 
    };
        var token = jwt.sign(payload, app.get('superSecret'), {
          //expiresIn: "2h" // expires in 2 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   

    }

  });
});


// route to authenticate a user (POST http://localhost:8080/api/authenticate)
apiRoutes.get('/', function(req, res) {
  return res.status(403).send({ 
        success: false, 
        message: 'welcome to my graphql api yay' 
    });
});

// route middleware to verify a token
/*apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        var admin = decoded.admin;
        app.set('decoded',decoded);
        var id = decoded.id;
        console.log(req.originalUrl,' id:',id,' admin:',admin);
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
});

*/

app.use('/', apiRoutes);

//////////////////
app.use('*', cors());
const userSchema = require('./graphql/index').userSchema;



app.use('/api/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: true,
}));

/*app.use('/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: false
}));
*/
// Up and Running at Port 4000
app.listen(port, () => {
  console.log('A GraphQL API running at port ',port);
});