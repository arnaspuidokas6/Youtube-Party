Video = require('../models/viewedVideoModel');

//For index
exports.index = function (req, res) {
    Video.get(function (err, video) {
        if (err)
            res.json({
                status: 'error',
                message: err,
            });
        res.json({
            status: 'success',
            message: 'Got video successfully!',
            data: video,
        });
    });
};

//For adding new search
exports.add = function (req, res) {
    var video = new Video();
    video.videoTitle = req.body.videoTitle;
    video.channelTitle = req.body.channelTitle;
    video.videoId = req.body.videoId;

    //Save and check error
    video.save(function (err) {
        if (err) res.json(err);
        res.json({
            message: 'New viewed video added!',
            data: video,
        });
    });
};

// View search
exports.view = function (req, res) {
    Video.findById(req.params.video_id, function (err, video) {
        if (err) res.send(err);
        res.json({
            message: 'Video Details',
            data: video,
        });
    });
};

exports.delete = function (req, res) {
    Video.deleteOne(
        {
            _id: req.params.video_id,
        },
        function (err, contact) {
            if (err) res.send(err);
            res.json({
                status: 'success',
                message: 'Video Deleted',
            });
        },
    );
};
