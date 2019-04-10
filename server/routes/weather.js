var express = require('express');
var router = express.Router();

let onewords = ["Clear", "Sunny", "Cloudy", "Rainy"];
let degrees = [{hi: 80, lo: 60}, {hi: 85, lo: 75}, {hi: 65, lo: 55}, {hi: 80, lo: 75}];
let descriptions = ["With a chance of wind", "Can't see a thing", "Better stay home", "With a chance of clarity"];

/* GET weather forecast. */
router.get('/:year/:month/:day', (req, res, next) => {
    res.contentType("application/json");
    let rand = Math.floor((Math.random() * 100000) % onewords.length);
    res.send({
        year: req.params.year,
        month: req.params.month,
        day: req.params.day,
        oneword: onewords[rand],
        degrees: degrees[rand],
        description: descriptions[rand]
    });
});

module.exports = router;
