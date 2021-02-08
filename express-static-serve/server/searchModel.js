// eslint-disable-next-line @typescript-eslint/no-var-requires
var mongoose = require('mongoose');

// Export Search Keyword model
var searchSchema = mongoose.Schema({
    searchValue: {
        type: String,
        // required: true,
    },
});

var Search = (module.exports = mongoose.model('search', searchSchema));

module.exports.get = function (callback, limit) {
    Search.find(callback).limit(limit);
};
