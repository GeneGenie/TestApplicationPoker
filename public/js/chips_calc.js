function chips(bet) {

    var start = bet;
    var rate = {};

    var chip50 = (bet - (bet%50))/50;
    console.log("50: ", chip50);

    rate.chips50 = chip50;
    bet = bet%50;

    var chip25 = (bet - (bet%25))/25;
    console.log("25: ",chip25);

    rate.chips25 = chip25;
    bet = bet%25;

    var chip10 = (bet - (bet%10))/10;
    console.log("10: ",chip10);

    rate.chips10 = chip10;
    bet = bet%10;

    var chip5 = (bet - (bet%5))/5;
    console.log("5: ",chip5);

    rate.chips5 = chip5;
    bet = bet%5;

    var chip1 = bet;
    console.log("1: ",chip1);

    rate.chips1 = chip1;

    console.log(start, rate);
    return rate
}

chips(424);


$.ajax({
    type: "POST",
    url: "http://nuclear.web-haker.ru/rest/add-new",
    data: {
        name: "Optimus Prime",
        type: "Autobot",
        film: "Transformers"
    },
    success: function(res){
        console.log(res);
    }
});