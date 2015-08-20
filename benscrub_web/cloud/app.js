
var express = require('express');
var app = express();

// Imports
var sirclo = require('cloud/sirclo.js');
var async = require('cloud/async.js');
var ig = require('cloud/instagram-v1-1.0.js');
ig.initialize('f2d80028815a437aaadc105edc4b69b1');
ig.setAccessToken('1506972754.1fb234f.ab41e5e202d04682afcf4b16877059cb'); // access token
var ig_user_id = 1506972754;

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'jade');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body
app.set('view options', {
    layout: false
});

function is_mobile(req) {
    var ua = req.header('user-agent');
    if (/mobile/i.test(ua)) return true;
    else return false;
};


// Router

// - Web
app.get('/', function(req, res) {
  if (is_mobile(req)) res.render('discover_benscrub_mobile', {});
  else res.render('discover_benscrub', {});
});

app.get('/mobile', function(req, res) {
  res.render('discover_benscrub_mobile', {});
});

// - Web DEV environment
app.get('/dev', function(req, res) {
  res.render('dev/discover_benscrub', {});
});

app.get('/dev/mobile', function(req, res) {
  res.render('dev/discover_benscrub_mobile', {});
});

app.get('/dev/farfetch', function(req, res) {
  res.render('dev/discover', {});
});

app.get('/dev/airbnb-glyph', function(req, res) {
  res.render('dev/airbnb-glyph', {});
});

app.get('/ig', function(req, res) {
  ig.getRecentMediaByUser(66, {"count":20}).then(
    function(httpResponse) {
    res.render('ig_feed', {data:httpResponse.data.data});
  },function(error) {
    res.error(error);
  });
});

// NOT USED ANYMORE, USE PARSE CLOUD CODE
app.get('/ig/scrap_email/:username', function(req, res) {
  ig.searchUser({"q":req.params.username}).then(function(httpResponse){
    var user = httpResponse.data.data[0];
    ig.getRecentMediaByUser(user.id, {"count":100}).then(
      function(httpResponse) {
        // Paginate, carrying existing posts
        paginate(httpResponse.data.pagination.next_url, httpResponse.data.data, function(posts){
          var bufferText;
          for (i in posts){
            var post = posts[i];
            for (j in post.comments.data){
              var comment = post.comments.data[j];
              bufferText+=comment.text;
              bufferText+=" "
            }
          };

          // Regex the email
          var emails = findEmailInString(bufferText);
          // Return
          res.send(emails.join('<br>'));

        });
    },function(error) {
      console.log('err1');
      res.send('gege1');
      // res.error(error);
    });
  })
});

var Instagram_info = Parse.Object.extend("ig_info");

// NOT USED ANYMORE, USE PARSE CLOUD CODE
app.get('/ig_info', function(req, res) {
  ig.getSelfUser().then(
    function(httpResponse){
    res.send(httpResponse.data);
  },function(error) {
    res.send(error);
  });
});

Parse.Cloud.job("ig_info", function(req, status) {
  Parse.Cloud.useMasterKey();
  ig.getSelfUser().then(
    function(httpResponse){

      var query = new Parse.Query(Instagram_info);
      query.descending('createdAt');
      query.first({
        success: function(prev_instagram_info) {
          var instagram_info = new Instagram_info();
          instagram_info.set("followed_by", httpResponse.data.data.counts.followed_by); // get real number of followers
          if (prev_instagram_info){  // get difference from previous row  
            instagram_info.set("followed_by_difference", parseInt(httpResponse.data.data.counts.followed_by) - prev_instagram_info.get('followed_by'));          
          }
          instagram_info.save(null, {
            success: function() {
              status.success("ig_info completed successfully.");
            }, error: function(){
              status.error("ig_info failed to save")
            }
          });

        }
      });
  },function(error) {
    status.error("ig_info failed")
  });
})

function getGojekAcount(lastAccountID, completion){
  var gojekAccount = new GojekAccount2();
  Parse.Cloud.httpRequest({
    url: "http://api.gojek.co.id/gojek/customer/"+lastAccountID,
    method: "GET",
    headers: gojek_header_request(),
    success: function(httpResponse) {
      // console.log('gojek query done'+JSON.stringify(httpResponse.data));
      gojekAccount.set("phone", httpResponse.data.phone);
      gojekAccount.set("email", httpResponse.data.email);
      gojekAccount.set("name", httpResponse.data.name);
      gojekAccount.set("accountID", httpResponse.data.id);
      gojekAccount.set("corporateId", httpResponse.data.corporateId);
      gojekAccount.set("corporateName", httpResponse.data.corporateName);
      gojekAccount.set("creditBalance", httpResponse.data.creditBalance);
      gojekAccount.set("newCustomer", httpResponse.data.newCustomer);
      gojekAccount.set("blacklisted", httpResponse.data.blacklisted);
      gojekAccount.set("signupDate", httpResponse.data.signupDate);
      completion(null, gojekAccount);
    },
    error: function(err) {
      console.log("gojek_scrap_account: request to gojek failed: acc_id " + lastAccountID);
      gojekAccount.set("accountID", lastAccountID);
      completion(null, gojekAccount);
    }
  });
}

var K_NUMBER_OF_ACCOUNT_PER_REQUEST = 1000;
var GojekAccount2 = Parse.Object.extend("gojek_account2");
Parse.Cloud.job("gojek_scrap_account", function(req, status) {
  Parse.Cloud.useMasterKey();
  var query = new Parse.Query(GojekAccount2);
  var lastAccountID;
  query.descending('accountID');
  query.first({
    success: function(firstGojekAccount) {
      lastAccountID = firstGojekAccount.get('accountID');
      // var stashes = [];
      // Create emailStash object for each posts.
      var accountListToScrap = [];
      for (var i=1; i<=K_NUMBER_OF_ACCOUNT_PER_REQUEST; i++){
        accountListToScrap.push(lastAccountID+i);
      }
      async.map(accountListToScrap, getGojekAcount, function (err, results) {
        console.log('return res in count ' + results.length);
        console.log(JSON.stringify(results));
        // Then save to parse
        var sanitizedResults = [];
        for (var i=0; i<results.length; i++){
          if (results[i]){
            sanitizedResults.push(results[i]);
          }
        }
        Parse.Object.saveAll(sanitizedResults, {
          success: function(res) {
            status.success("gojek_scrap_account complete");
          }, 
          error: function(error){
            status.error("gojek_scrap_account not saved");     
          }
        });
      });

    }
  });
});






var Email_stash = Parse.Object.extend("email_stash");

// To scrap any emails within user's comment
// Receive parameter {"username":"aruararu"}
Parse.Cloud.job("scrap_email", function(req, status) {
  Parse.Cloud.useMasterKey();
  var objParams = JSON.parse(JSON.stringify(eval("(" + req.params + ")")));
  ig.searchUser({"q":objParams.username}).then(function(httpResponse){
    console.log('sukses1');
    var user = httpResponse.data.data[0];
    ig.getRecentMediaByUser(user.id, {"count":20}).then(
      function(httpResponse) {
        console.log('sukses1.5');
        // save this result
        var posts = httpResponse.data.data;
        savePostsToEmailStash(posts, function(){
          // then paginate
          if (httpResponse.data.pagination.next_url){
            paginate_and_save(httpResponse.data.pagination.next_url, function(){
              status.success("scrap_email: "+objParams.username + "complete");
            })
          }
        });
    },function(error) {
      console.log('gagal1');
      status.error(JSON.stringify(error));
    })
  })
})

function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

function paginate_and_save(nextUrl, success_callback){
  Parse.Cloud.httpRequest({
    url: nextUrl,
    success: function(httpResponse) {    
      var posts = httpResponse.data.data;
      console.log('sukses2');
      savePostsToEmailStash(posts, function(){
        console.log('sukses3: saved to parse');
        if (httpResponse.data.pagination.next_url){
          // setTimeout(function(){
          // }, 500);
          sleep(600, function() {
            paginate_and_save(httpResponse.data.pagination.next_url, success_callback);
             // executes after one second, and blocks the thread
          }); 
        } else{
          success_callback();
        }
      });     
    },
    error: function(error){      
      console.log('gagal2');
    }
  })
}
// End Testing parse cloud code


function savePostsToEmailStash(posts, completion){
  var stashes = [];

  // Create emailStash object for each posts.
  async.map(posts, createEmailStashesFromPost, function (err, results) {

    // Results here is a collection of array
    // eg. [[emailStash1, emailStash2], [emailStash3, emailStash4], [emailStash5]]
    // So we concat it
    for (i in results){ 
      stashes = stashes.concat(results[i]);
    }

    // Then save to parse
    Parse.Object.saveAll(stashes, {
      success: function(results) {
        console.log("sukses3: saving succeed before completion "+ JSON.stringify(results));
        completion();
      }, 
      error: function(error){
        console.log("gagal3: saving error");
      }
    });
  });
}

// return Array of email stash
function createEmailStashesFromPost(post, completion){
  var stashes = [];

  var processComment = function(comment){
    // Convert to parse object
    var newEmailStashes = createEmailStashesFromComment(comment);
    // Set additional properties
    for (j in newEmailStashes){
      emailStash = newEmailStashes[j];
      emailStash.set("source", post.user.username);
    }
    // Store in stash
    stashes = stashes.concat(newEmailStashes);

  }

  // When comments count is more than what we have
  // it means current data is not complete
  // we need to query for the post object to get more data
  if (post.comments.count > post.comments.data.length){

    ig.getMediaComments(post.id).then(
      function(httpResponse) {
        for (i in httpResponse.data.data){
          var comment = httpResponse.data.data[i]; 
          processComment(comment);
        }

        //return callback
        sleep(600, function() {
          completion(null, stashes);
        }); 
      
    },function(error) {
        console.log(error);
        completion(error, stashes);
    });

  // When the data is complete, do synchronous processing
  } else{
    for (i in post.comments.data){
      var comment = post.comments.data[i]; 
      processComment(comment);
    }
    //return callback
    completion(null, stashes);

  }

}

// return Array of email stash
function createEmailStashesFromComment(comment){
  var stashes = [];
  var emails = findEmailInString(comment.text);
  for (k in emails){
    email = emails[k];
    var email_stash = new Email_stash();
    email_stash.set("email", email);
    stashes.push(email_stash);
  }
  return stashes;
}


function paginate(nextUrl, prev_posts, success_callback){
  if (nextUrl){
    Parse.Cloud.httpRequest({
      url: nextUrl,
      success: function(httpResponse) {    
        var posts = httpResponse.data.data;
        posts = prev_posts.concat(posts);
        if (httpResponse.data.pagination.next_url){
          paginate(httpResponse.data.pagination.next_url, posts, success_callback);
        } else{
          success_callback(posts);
        }
        console.log("not err"+nextUrl);
      },
      error: function(error){
        console.log(JSON.stringify(error));
      }
    });
  } else{
    success_callback(prev_posts);
  }
}

function findEmailInString(string){
  var searchInThisString = string; //"SomeName, First (First.SomeName@usa.mywebsite1.com) SomeName2, First2 (First2.SomeName2@usa.mywebsite1.com)";
  var foundEmails =[];
  var emailRegex = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  var gotcha;
  while (match = emailRegex.exec(searchInThisString)){
       //-- store in array the found match email
       foundEmails.push(match[0]);
      //-- remove the found email and continue search if there are still emails
      searchInThisString= searchInThisString.replace(match[0],"")
  }

  var sanitizedEmails = [];
  for (i in foundEmails){
    var email = foundEmails[i];
    if (email.match(".com$")||email.match(".co.id$")){
      sanitizedEmails.push(email);
    } else{
      var lastIndexOfDot = email.lastIndexOf(" ")
      var email = email.substring(0, lastIndexOfDot);
      if (email.match(".com$")||email.match(".co.id$")){
        sanitizedEmails.push(email);
      }
    }
  }
  return sanitizedEmails;
}

app.get('/dev/drjart', function(req, res) {
  res.render('dev/unused_discover_drjart', {});
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

app.get('/api/gojek/hide/:objectId', function(req, res) {
  var GojekAccount = Parse.Object.extend("gojek_account");
  var query = new Parse.Query(GojekAccount);
  query.get(req.params.objectId, {
    success: function(gojekAccount) {
      gojekAccount.set("hide", true);
      gojekAccount.save(null, {
        success: function(gojekAccount) {
          res.send(gojekAccount);
        }
      });
    }
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