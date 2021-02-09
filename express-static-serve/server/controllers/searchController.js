Search = require('../models/searchModel');

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
    search.searchValue = req.body.searchValue;

    search.save((err, res) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
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

exports.delete = function (req, res) {
    Search.deleteOne(
        {
            _id: req.params.search_id,
        },
        function (err, contact) {
            if (err) res.send(err);
            res.json({
                status: 'success',
                message: 'Search Deleted',
            });
        },
    );
};
