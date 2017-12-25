const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const Alert = require('../models/alert');
// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/websafe', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

router.get('/alerts', function(req, res, next) {
    Alert.find(function(err, alerts) {
        console.log(res.json(alerts))
        res.json(alerts);
    })
});

// Get alerts
// router.get('/alerts', (req, res) => {
//     connection((db) => {
//         db.collection('alerts')
//             .find()
//             .toArray()
//             .then((alerts) => {
//                 response.data = alerts;
//                 res.json(response);
//             })
//             .catch((err) => {
//                 sendError(err, res);
//             });
//     });
// });

module.exports = router;