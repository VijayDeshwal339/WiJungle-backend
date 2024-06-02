const express = require('express');
const router = express.Router();
const Alert = require('../models/Alert');

// Endpoint to add alerts
router.post('/addAlerts', async (req, res) => {
    const alerts = req.body;
    await Alert.insertMany(alerts);
    res.send({ message: 'Alerts added successfully' });
});

// Endpoint to get all alerts
router.get('/alerts', async (req, res) => {
    const alerts = await Alert.find({});
    res.send(alerts);
});

module.exports = router;
