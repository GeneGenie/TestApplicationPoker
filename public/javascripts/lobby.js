

soc.on('lobby:roomsList', function (data) {

var $container = $("#rooms").text("");
    _.each(data,function(room){
        console.log(room)
        var $room = $("<div class='room'/>").text(room.name);
        var $stake = $("<div class='blind'/>").text(room.blind.l+'/'+room.blind.h);
        $room.append($stake);
        $room.on("click",function enterRoom(){
            soc.emit("lobby:enterRoom",{roomId: room.id})
        })
        $container.append($room);
    })
});









