var routes = require('../routes');
var users = require('../routes/user');

module.exports =function(app){
    app.all('/user/:action', users.route);

}