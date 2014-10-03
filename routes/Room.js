
var Game ;
module.exports = function(io){
    Game  = require('../routes/Game')(io);

    return function(cfg){
        return new Room({io:io,cfg:cfg})
    }
}
var Room = function(opts){
    var self= this;
    self.id =ID.generate();
    self.blind = opts.cfg.blind;
    self.name = opts.cfg.name;
    self.testM = function(){}
    var io  = opts.io;
    var i=0;
    var users  = [] ;
    self.userEnter = function(user,req){
        i++;
        users
       // req.io.broadcast("room:test",'вы блять');
        req.io.join("room"+self.id);


        req.io.socket.emit("room:test",'tы блять'+i);
        req.io.room("room"+self.id).broadcast("room:test",'pidor enter: '+user.login)
    }


   // var g=   new Game();




}
