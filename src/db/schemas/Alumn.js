const {Schema} = require('mongoose');

const AlumnSchema = new Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    active: {
        type: Boolean
    }
});

module.exports = AlumnSchema;