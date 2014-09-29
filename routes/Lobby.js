var Room ;
module.exports =function(_io){
    Room = require('../routes/Room')(_io);


    new Lobby({io:_io});
}

function Lobby(opts){
   var rooms = [];
    var io = opts.io;

    rooms.push(new Room({name:"Room1"}));
    rooms.push(new Room({name:"Default Room asd"}));


    io.on("connection",function(){
        io.emit("lobby:roomsList",rooms)
    })
    io.on('lobby:enterRoom',function(data){
       var r =  _.find(rooms,function(room){
            return room.id == data.roomId;
        })
       // r.userEnter(data.userId);

    })

}