var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {     // external code 
  res.render('layout', {
      pageTitle: 'Home',
      body: 'index',
  });
});


router.get('/', (req, res) => {     // external code 
  res.render('layout', {
      pageTitle: 'Projects',
      body: 'projects',
  });
});


router.get('/', (req, res) => {     // external code 
  res.render('layout', {
      pageTitle: 'Contact',
      body: 'contact',
  });
});


router.get('/', (req, res) => {     // external code 
  res.render('layout', {
      pageTitle: 'About',
      body: 'about',
  });
});



module.exports = router;
