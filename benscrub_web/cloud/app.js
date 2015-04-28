
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


app.get('/gojek/ready', function(req, res) {
  var GojekAccount = Parse.Object.extend("gojek_account");
  var query = new Parse.Query(GojekAccount);
  query.exists("refer_to_code");
  query.exists("refer_by_code");
  query.notEqualTo("hide", true); // Hide completed appointments that doesnt have value
  query.descending("createdAt");
  query.find({
    success: function(results) {
      res.render('gojek', {data:JSON.parse(JSON.stringify(results))});
    },
    error: function(error) {
      res.send(error);
    }
  });
});

app.get('/gojek/stash', function(req, res) {
  var GojekAccount = Parse.Object.extend("gojek_account");
  var query = new Parse.Query(GojekAccount);
  query.descending("createdAt");
  query.notEqualTo("hide", true);  // Hide completed appointments that doesnt have value
  query.find({
    success: function(results) {
      res.render('gojek', {data:JSON.parse(JSON.stringify(results))});
    },
    error: function(error) {
      res.send(error);
    }
  });
});



app.get('/api/gojek/create/:email', function(req, res) {
  create_account(req.params.email, function(gojekAccount){
    res.send(gojekAccount);
  });
});

app.get('/api/gojek/:account_id/refer_to/:another_account_id', function(req, res) {
  refer_account(req.params.account_id, req.params.parse_id, req.params.another_account_id, req.params.another_parse_id, function(response){
    res.send(response);
  })
});

app.get('/api/gojek/create', function(req, res, success_callback) {
  create_account("budi15@mailinator.com", function(gojekAccount){
    res.send(gojekAccount);
  });
});

app.get('/api/gojek/create/:email/refer_to/:another_account_id', function(req, res, success_callback) { //Extending 'another_account_id' by creating email
  create_account(req.params.email, function(newGojekAccount){
    refer_account2(newGojekAccount, req.params.another_account_id, function(response){
      res.send(response);
    });
  });
});

account_by_email = function(email, success_callback){
  var GojekAccount = Parse.Object.extend("gojek_account");
  var query = new Parse.Query(GojekAccount);
  query.equalTo("email", email);
  query.first({
    success: function(gojekAccount) {
      success_callback(gojekAccount);
    }
  });
}

account_by_account_id = function(account_id, success_callback){
  var GojekAccount = Parse.Object.extend("gojek_account");
  var query = new Parse.Query(GojekAccount);
  query.equalTo("code", account_id);
  query.first({
    success: function(gojekAccount) {
      success_callback(gojekAccount);
    }
  });
}

refer_account = function(account_id, refer_to_account_id, success_callback){
  Parse.Cloud.httpRequest({
    url: "http://api.gojek.co.id/gojek/customer/referral",
    method: "POST",
    headers: gojek_header_request(),
    body: {
      "referralId": account_id, //referralId is the code thats being inputted
      "referrerId": refer_to_account_id, //referrerId will get the initial 50k
    },
    success: function(httpResponse) {
      account_by_account_id(account_id, function(gojek_account){
        refer_account2(gojek_account, refer_to_account_id, success_callback);
      });
    }
  });

}


refer_account2 = function(gojek_account, refer_to_account_id, success_callback){
  var account_id = gojek_account.get('code');
  Parse.Cloud.httpRequest({
    url: "http://api.gojek.co.id/gojek/customer/referral",
    method: "POST",
    headers: gojek_header_request(),
    body: {
      "referralId": account_id, //referralId is the code thats being inputted
      "referrerId": refer_to_account_id, //referrerId will get the initial 50k
    },
    success: function(httpResponse) {
      // success_callback(httpResponse);
      gojek_account.set("refer_to_code", refer_to_account_id);
      gojek_account.save(null, {
        success: function(gojek_account){
          var GojekAccount = Parse.Object.extend("gojek_account");
          var query = new Parse.Query(GojekAccount);
          query.equalTo("code", refer_to_account_id);
          query.first({
            success: function(referToGojekAccount) {
              referToGojekAccount.set("refer_by_code", account_id);
              referToGojekAccount.save(null, {
                success: function(referToGojekAccount){
                  success_callback(httpResponse);
                }, error: function(error){
                  success_callback(error);
                }
              });
            }, error: function(error){
              success_callback(error);
            }
          });
        }, error: function(error){
          success_callback(error);
        }
      });
    }, error: function(error){
      success_callback(error);
    }
  });

}

create_account = function(email, success_callback){

  // Static Variable
  var name = "Budi Sentosa";
  var phone = Math.floor(Math.random() * 10000000);
  var password = "111111111";

  var postReqData = 
  Parse.Cloud.httpRequest({
    url: "http://api.gojek.co.id/gojek/customer/signup",
    method: "POST",
    headers: gojek_header_request(),
    body: {
      "email": email,
      "name": name,
      "phone": phone,
      "password": password,
      "confirmationPassword": password,
    },
    success: function(httpResponse) {

      var GojekAccount = Parse.Object.extend("gojek_account");
      var gojekAccount = new GojekAccount(); 
      gojekAccount.set("email", email);
      gojekAccount.set("name", name);
      gojekAccount.set("code", JSON.stringify((JSON.parse(httpResponse.text)).customerId));
      gojekAccount.save(null, {
        success: function(gojekAccount) {
          success_callback(gojekAccount);
        }
      });
    },
    error: function(httpResponse) {
      // res.send(httpResponse.text)
    }
  });

}

gojek_header_request = function(){
  return {
      'Host': 'api.gojek.co.id',
      'Connection': 'keep-alive',
      'Accept': '*/*',
      'User-Agent': 'GO-JEK/com.go-jek.ios (1.20; OS Version 8.1 (Build 12B411))',
      'Content-Type': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8,gl;q=0.6,id;q=0.4,ru;q=0.2,ms;q=0.2',
      'Cookie': 'SERVERID=jetty-02b'
    }
}


// Attach the Express app to Cloud Code.
app.listen();