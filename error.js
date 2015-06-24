var connect = require('connect');
var app = connect()
    .use(connect.logger('dev'))
    .use(function(req, res, next){
        setTimeout(function(){
            next(new Error('something wrong'));
        }, 600)
    })
//    .use(connect.errorHandler())
    .listen(3000);