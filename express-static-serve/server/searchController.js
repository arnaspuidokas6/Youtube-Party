//Import Bio Model
Search = require('./searchModel');
//For index
exports.index = function (req, res) {
    Search.get(function (err, search) {
        if (err)
            res.json({
                status: 'error',
                message: err,
            });
        res.json({
            status: 'success',
            message: 'Got search successfully!',
            data: search,
        });
    });
};

//For adding new search
exports.add = function (req, res) {
    var search = new Search();
    console.log(req.body);
    search.searchValue = req.body.searchValue;

    //Save and check error
    search.save(function (err) {
        if (err) res.json(err);
        res.json({
            message: 'New search keyword added!',
            data: search,
        });
    });
};

// View search
exports.view = function (req, res) {
    Search.findById(req.params.search_id, function (err, search) {
        if (err) res.send(err);
        res.json({
            message: 'Search Details',
            data: search,
        });
    });
};
