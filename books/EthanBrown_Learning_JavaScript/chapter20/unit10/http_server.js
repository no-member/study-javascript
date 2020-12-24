const http = require('http');

const server = http.createServer(function(req, res) {
  if(req.method === 'GET' && req.url === 'favicon.ico') {
    const fs = require('fs');
    fs.createReadStream('favicon.ico');
    fs.pipe(res); // pipe가 end 대신 사용됨
  }  else {
    console.log(`${req.method} ${req.url}`);
    res.end('Hello world!');
  }
});

const port = 8080;
server.listen(port, function() {
  console.log(`server started on port ${port}`);
});
