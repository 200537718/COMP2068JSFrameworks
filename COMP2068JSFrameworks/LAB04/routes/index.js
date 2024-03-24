
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

// Route for Diljit Dosanjh
router.get('/diljit_dosanjh', function(req, res, next) {
  res.render('diljit_dosanjh');
});

// Route for Sidhu Moosewala
router.get('/sidhu_moosewala', function(req, res, next) {
  res.render('sidhu_moosewala');
});

// Route for Amrinder Gill
router.get('/amrinder_gill', function(req, res, next) {
  res.render('amrinder_gill');
});

// Route for Guru Randhawa
router.get('/guru_randhawa', function(req, res, next) {
  res.render('guru_randhawa');
});

module.exports = router;
