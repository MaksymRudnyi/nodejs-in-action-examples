var connect = require('connect');
var fs = require('fs');
var log = fs.createWriteStream('./myapp.log', {flags: 'a'});
console.log(__dirname);
var app = connect()
    .use(connect.favicon())
    .use(connect.logger({format: ':method :url :response-time ms :referrer', stream: log}))
//    .use(connect.logger('dev'))
    .use(function(req, res, next){
        res.write('Hellog');
        res.end();

    })
    .listen(3000);