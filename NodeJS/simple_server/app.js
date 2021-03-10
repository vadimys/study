const http = require('http');
const server = http.createServer(function (req, resp) {
    console.log(req);
    resp.end('First SERVER!');
});

server.listen(1307);
