
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
    self.userEnter = function(socket){
        i++;

    io.broadcast("room:test",'вы блять');
    socket.emit("room:test",'tы блять'+i);

    }


   // var g=   new Game();




}
