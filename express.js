var express = require('express');
var forceSsl = require('force-ssl-heroku');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use('/', express.static(__dirname));
// don't use SSL for now, digitalsignage.com doesn't support it :(
//app.use(forceSsl)

app.listen(app.get('port'), function () {
	console.log('Node app is running on port', app.get('port'));
});

app.get('/', function(request, response) {
	response.redirect('msgetstarted.html');
});

