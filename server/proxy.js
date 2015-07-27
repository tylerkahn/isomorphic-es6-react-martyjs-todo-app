var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {
  if (/\/api\//.test(req.url)) {
      proxy.web(req, res, {
        target: 'http://localhost:5001'
      });
  } else {
    proxy.web(req, res, {
        target: 'http://localhost:5000'
    });
  }
});

server.on('error', function (err, req, res) {
  console.log("********* ERROR ***********");
  console.log(err);
});

console.log("proxy listening on 5003");
server.listen(5003);
