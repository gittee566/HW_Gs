var http = require('http')
let date = new Date();
http
    .createServer(function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Teerasak Sae-Heng\n' + date.toLocaleString())
    })
    .listen(2337, '127.0.0.2')
console.log('Server running at http://127.0.0.2:2337/')