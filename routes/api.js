const express = require('express');
const router = express.Router();
const models = require('../models/models');
const walletModels = require('../models/walletmodels');
const chainlinkmodel = require('../models/chainlinkmodel');

router.post('/createLinkTrade', function(req, res, next) {
    models.create(req.body).then(function(trade) {
        res.send(trade)
    }).catch(next);
});

router.get('/getAllLinkTrades', async (req, res) => {
    try {
        var result = await models.find().exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/createTrade', function(req, res, next) {
    models.create(req.body).then(function(trade) {
        res.send(trade)
    }).catch(next);
});

router.get('/getAllTrades', async (req, res) => {
    try {
        var result = await models.find().exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/createTransfer', function(req, res, next) {
    walletModels.create(req.body).then(function(trade) {
        res.send(trade)
    }).catch(next);
});

router.get('/getAllTransfer', async (req, res) => {
    try {
        var result = await walletModels.find().exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;