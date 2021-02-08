/* eslint-disable @typescript-eslint/no-var-requires */
//initialize express router
let router = require('express').Router();
//set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Works',
        message: 'Welcome to FirstRest API',
    });
});
//Import Bio Controller
var searchController = require('./searchController');
// Search routes
router.route('/search').get(searchController.index).post(searchController.add);

router.route('/search/:search_id').get(searchController.view);
// .patch(bioController.update)
// .put(bioController.update)
// .delete(bioController.delete);

//Export API routes
module.exports = router;
