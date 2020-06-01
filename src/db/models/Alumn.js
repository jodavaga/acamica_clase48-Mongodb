const mongoose = require('mongoose');
const AlumnSchema = require('../schemas/Alumn');

module.exports = mongoose.model('Alumn', AlumnSchema);