
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
    self.name = opts.cfg.name;
    self.testM = function(){}
    var io  = opts.io;




   // var g=   new Game();




}
