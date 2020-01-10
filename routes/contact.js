var express = require('express');
var router = express.Router();
const dbConnection = require('../dbConnection')
const ObjectId = require('mongodb').ObjectID;

router.post('/', function (req, res, next) {
    console.log(req.body);
     dbConnection(function (db) {
      db.collection('person')
        .insertOne({
            name: req.body.name,
            firstName: req.body.firstName,
            mobile: req.body.mobile,
            domNumber : req.body.domNumber,
            email: req.body.email,
            date: new Date(),
        });
        res.status(201).json({}); 
    });
  })

  router.get('/:id', function(req, res, next) {
    console.log(req.params.id)

    dbConnection(function(db){
        db.collection('person') 
            .findOne({ _id: new ObjectId(req.params.id) }, null, function(err, person){
                if (err) {
                    return
                } 
                console.log(person)
                res.render('editPerson', { title: 'Contact', person : person})
            })
    })
});

router.put('/:id', function(req, res, next) {
    dbConnection(function(db) {
        db.collection('person')
        .updateOne({ _id : new ObjectId(req.params.id)}, {$set: {person: req.body.name}}, {$set: {person: req.body.firstName}}, {$set: {person: req.body.mobile}}, {$set: {person: req.body.domNumber}}, {$set: {person: req.body.email}}, null, function(err) {
            res.end();
        })
    })
}) 

module.exports = router;