const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();
var postalAbbreviations = require('./us_state.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Find My Election', states: postalAbbreviations });
});

  function apiResult() {

   axios.get('https://api.turbovote.org/elections/upcoming').then(response => {
   console.log(response.data);
   return response.data;
  })

  .catch(error => console.error(error))
  }

  apiResult();

  const changeResult = function() {
    document.getElementById('submit').addEventListener('click', function() {
    document.getElementById('result').innerHTML = apiResult();
     })
    }
// module.exports = router;
