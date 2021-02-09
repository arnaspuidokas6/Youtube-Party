// eslint-disable-next-line @typescript-eslint/no-var-requires
var mongoose = require('mongoose');

var videoSchema = mongoose.Schema({
    videoTitle: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: false,
    },
    channelTitle: {
        type: String,
        required: false,
    },
});

var viewedVideo = (module.exports = mongoose.model('viewedvideo', videoSchema));

module.exports.get = function (callback, limit) {
    viewedVideo.find(callback).limit(limit);
};
