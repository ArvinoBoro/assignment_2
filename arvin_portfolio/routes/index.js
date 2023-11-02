var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {     
  res.render('layout', {
      pageTitle: 'Home',
      body: 'index',
  });
});


router.get('/projects', (req, res) => {      
  res.render('layout', {
      pageTitle: 'Projects',
      body: 'projects',
  });
});


router.get('/contact', (req, res) => {     
  res.render('layout', {
      pageTitle: 'Contact',
      body: 'contact',
  });
});


router.get('/about', (req, res) => {    
  res.render('layout', {
      pageTitle: 'About',
      body: 'about', 
  });
});


module.exports = router;
