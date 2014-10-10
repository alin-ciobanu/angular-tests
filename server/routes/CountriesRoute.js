
// NOTE that app is defined globally

var express = require('express');

var countriesModel = require('./../model/Countries.js');
var mongoose = require('mongoose');

var router = express.Router();

router.get('/',
    function (req, res, next) {

        countriesModel.find({}, function (err, countries) {
            if (err) {
                res.status(500).json({
                    message: "Oops. No countries found."
                }).end();
            }
            else {
                res.status(200).json(countries).end();
            }
        });

    });

router.get('/byName',
    function (req, res, next) {

        var name = req.query.name;

        countriesModel.findOne({name: name}, function (err, country) {
            if (err || !country) {
                res.status(500).json({
                    message: "Oops. Country isn't available."
                }).end();
            }
            else {
                res.status(200).json(bet).end();
            }
        });

    });

router.post('/',
    function (req, res, next) {

        var country = new countriesModel();

        country.isShown = false;

        for (var i in req.body) {
            country[i] = req.body[i];
        }

        country.save(function (err) {
            if (err) {
                res.status(500).json({
                    message: "An error occurred while trying to save country."
                }).end();
            }
            else {
                res.status(201).json(country).end();
            }
        });

    });


app.use('/api/countries', router);

