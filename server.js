var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var app = express();


var http = require('http').Server(app);
//var io = require('socket.io')(http);

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://admin:ipredicttadmin@ds057234.mlab.com:57234/wavelength');
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



var api = require('./routes/api')(app, express);
app.use('/', api);

var port = process.env.PORT || 3000;

app.listen(port, function() {

    console.log("Listening on " + port);
});


