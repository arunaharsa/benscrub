
var express = require('express');
var app = express();

// Imports
var sirclo = require('cloud/sirclo.js');
var ig = require('cloud/instagram-v1-1.0.js');
ig.initialize('f2d80028815a437aaadc105edc4b69b1');
// ig.setAccessToken('4152157.f2d8002.5ad2c7ad0d9845d785b5a5cc246e429');

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'jade');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body
app.set('view options', {
    layout: false
});

// Router

// - Web
app.get('/', function(req, res) {
  res.render('discover', {});
});

app.get('/ig', function(req, res) {
  ig.getRecentMediaByUser(66, {"count":20}).then(
    function(httpResponse) {
    res.render('ig_feed', {data:httpResponse.data.data});
  },function(error) {
    res.error(error);
  });
});

app.get('/drjart', function(req, res) {
  res.render('discover_drjart', {});
});

app.get('/drjart/ig', function(req, res) {
  res.render('ig_drjart', {});
});




// - API
app.get('/f/:qty', function(req, res) {
  sirclo.initializeCartThenRedirectToGuestCheckout(req, res, 'frank-body-original-coffee-scrub', req.params.qty);
});

app.get('/f', function(req, res) {
  sirclo.initializeCartThenRedirectToGuestCheckout(req, res, 'frank-body-original-coffee-scrub', 1);
});

app.get('/s/:qty', function(req, res) {
  sirclo.initializeCartThenRedirectToGuestCheckout(req, res, 'skinnyme-teatox-14-days-pack', req.params.qty);
});

app.get('/s', function(req, res) {
  sirclo.initializeCartThenRedirectToGuestCheckout(req, res, 'skinnyme-teatox-14-days-pack', 1);
});

app.get('/h/:qty', function(req, res) {
  sirclo.initializeCartThenRedirectToGuestCheckout(req, res, 'hello-hair-hydrating-mask', req.params.qty);
});

app.get('/h', function(req, res) {
  sirclo.initializeCartThenRedirectToGuestCheckout(req, res, 'hello-hair-hydrating-mask', 1);
});



// Attach the Express app to Cloud Code.
app.listen();