var express = require('express');
var router = express.Router();
const dbConnection = require('../dbConnection')

const findContact = function(db, callback) {
  db.collection('person')
  .find({})
  .toArray(function(err, docs) {
    callback(docs);
  })
}

/* GET home page. */
router.get('/', function (req, res, next) {
 // Use connect method to connect to the server
  dbConnection(function(db) {
  // Accéder aux tweets 
    findContact(db, function(contacts){
      res.render('index', { title: 'Mes contacts', posts: contacts});
    }) 
  });
});

module.exports = router;
