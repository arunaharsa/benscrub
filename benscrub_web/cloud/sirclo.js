exports.initializeCartThenRedirectToGuestCheckout = function(req, res, product_name, product_quantity){
  exports.requestCookieAuth(req, res, function(req, res, sirclo_session_id, cart_code){
    exports.addProductToCart(req, res, sirclo_session_id, cart_code, product_name, product_quantity, function(req, res, sirclo_session_id, cart_code){
      res.redirect('http://www.benscrub.com/cart/place_order/guest?sirclo_session_id='+sirclo_session_id+'&cart_code='+cart_code);
    });
  });  
}

exports.requestCookieAuth = function(req, res, success_callback){
  Parse.Cloud.httpRequest({
    url: "http://www.benscrub.com",
    error: function(httpResponse) {
      callback(httpResponse);
    },
    success: function(httpResponse) {
      success_callback(req, res, httpResponse.cookies.sirclo_session_id.value, httpResponse.cookies.cart_code.value);
    },
  });
}

exports.addProductToCart = function(req, res, sirclo_session_id, cart_code, product_name, product_quantity, success_callback){
  if (product_quantity<1){
    product_quantity = 1;
  }
  var postReqData = {
    'quantity': product_quantity,
    'item_id': product_name,
    'notify_email':'',
    'cmd': 'add',
  };
  Parse.Cloud.httpRequest({
    url: "http://www.benscrub.com/cart",
    method: "POST",
    headers: {
      'Host': 'www.benscrub.com',
      'Connection': 'keep-alive',
      'Content-Length': serialize(postReqData).length,
      'Cache-Control': 'max-age=0',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      'Origin': 'http://www.benscrub.com',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.104 Safari/537.36',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Referer': 'http://www.benscrub.com/cart?sirclo_session_id='+sirclo_session_id+'&cart_code='+cart_code,
      'Accept-Encoding': 'gzip, deflate',
      'Accept-Language': 'en-US,en;q=0.8,gl;q=0.6,id;q=0.4,ru;q=0.2,ms;q=0.2',
      'Cookie': 'sirclo_session_id='+sirclo_session_id+';cart_code='+cart_code,
    },
    body: postReqData,
    success: function(httpResponse) {
      res.send(httpResponse.text);
    },
    error: function(httpResponse) {
      success_callback(req, res, sirclo_session_id, cart_code);
    }
  });
}

// HELPER
serialize = function(obj) {
  var str = [];
  for(var p in obj)
     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  return str.join("&");
}