/* eslint-disable @typescript-eslint/no-var-requires */

let router = require('express').Router();

// test if works
router.get('/', function (req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API',
    });
});

var searchController = require('./controllers/searchController');
var videoController = require('./controllers/videoController');

// Search routes
router.route('/search').get(searchController.index).post(searchController.add);
router.route('/search/:search_id').get(searchController.view).delete(searchController.delete);

// Video routes
router.route('/video').get(videoController.index).post(videoController.add);
router.route('/video/:video_id').get(videoController.view).delete(videoController.delete);

//Export API routes
module.exports = router;
