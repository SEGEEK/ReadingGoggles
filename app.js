var express = require("express");
var FeedParser = require("feedparser");
var fs = require('fs');
 
var app = express();
app.use(express.logger());

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/app');
  //app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);
});

app.get('/', function(request, response) {
  response.render('index.html')
});

app.get('/feedData/:feedUrl/', function( request, response) {    
    FeedParser.parseUrl(request.params.feedUrl, {addmeta : false}, function(err, meta, articles) {    
        if( err ) {
            console.log("Error Parsing Stream at " + request.params.feedUrl);
            console.log(err);
            response.json( {error: err});
        } else {
            response.json({ meta: meta, articles: articles});
        }
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
