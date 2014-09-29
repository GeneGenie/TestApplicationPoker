module.exports.route = function(req,res){
    var httpMethod = req.method;
    var action = req.params.action;
    console.log(action);
    routes[httpMethod][action](req,res);
}