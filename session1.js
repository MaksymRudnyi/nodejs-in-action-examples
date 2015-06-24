var connect = require('connect');
var app = connect()
    .use(connect.favicon('http://m.voprosnik.ru/img/favicon.ico'))
    .use(connect.cookieParser('Keyboard cat'))
    .use(connect.session({ secret: "string" }))
    .use(function(req, res, next){
        var sess = req.session;
        if (sess.views){
            res.setHeader('Content-Type', 'text/html');
            res.write('<p>views: ' + sess.views + '</p>');
            res.end();
            sess.views++;
        } else {
            sess.views = 1;
            res.end('Welcome to the session demo. Refresh!');
        }
    });
app.listen(3000);