
var restful = require('node-restful');
var mongoose = require('mongoose');

var CountriesSchema = mongoose.Schema({
    name: {type: 'string', required: true},
    stereotype: {type: 'string', required: true},
    currency: {type: 'string', required: true},
    capitalCity: {type: 'string', required: true},
    flagImage: {type: 'string', required: true},
    isShown: {type: Boolean, required: false}
});

module.exports = restful.model('countries', CountriesSchema);
