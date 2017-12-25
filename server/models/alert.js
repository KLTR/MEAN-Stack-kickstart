const mongoose = require('mongoose');


const AlertSchema = mongoose.Schema({
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    network: {
        type: String,
    },
    username: {
        type: String,
    },
    confidence: {
        type: String
    },
    emotional_analysis: {
        type: String
    }
});

const Alert = module.exports = mongoose.model('Alert', AlertSchema);

module.exports.addAlert = (alert, callback) => {
    alert.save(callback);
};