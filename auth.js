var connect = require('connect');
var app = connect()
    .use(connect.basicAuth('max', 'test'))
    .use(function(req, res){
        res.end("I'm a secret")
    }).listen(3000);