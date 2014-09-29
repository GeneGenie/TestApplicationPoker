var Room ;
module.exports =function(_io){
    Room = require('../routes/Room')(_io);


    new Lobby({io:_io});
}

function Lobby(opts){
   var rooms = [];
    var io = opts.io;

    rooms.push(new Room({name:"Room1",blind:{l:1,h:2}}));
    rooms.push(new Room({name:"Room2",blind:{l:100,h:200}}));


    io.on("connection",function(con){
        console.log('new con')
        con.emit("lobby:roomsList",rooms)
    })
    io.route('lobby:enterRoom',function(req){
       var r =  _.find(rooms,function(room){
            return room.id == req.data.roomId;
        })
        console.log("ENTER",r,req.data)
       // r.userEnter(data.userId);

    })

}