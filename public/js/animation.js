$(document).ready(function () {
    return;
    var flippers = $('.table-cards .card-wrapper');

    setTimeout(function () {
        for (var i = -6, j = 1, d = 0; i < 7; i += 3, j++, d += 300) {
            $('.table-cards .card-mover.c' + (j)).transition({x: i + "em", y: "12.5em", rotate: '0deg', duration: 600, delay: d});
//            $('.card-wrapper').transition({perspective: '100px', rotateY: '180deg'});
            flippers.eq(5 - j).addClass("flipped f" + j);
        }
    }, 3000);

    $('.card-pair.one .card-mover.c2').transition({x: "-17em", y: "1em", delay: 0}, function () {
        $(this).css('z-index', 18);
    });
    $('.card-pair.one .card-mover.c1').transition({x: '-16em', y: '1em', delay: 200});
    $('.card-pair.two .card-mover.c2').transition({x: '-24em', y: '9em', delay: 400}, function () {
        $(this).css('z-index', 18);
    });
    $('.card-pair.two .card-mover.c1').transition({x: '-23em', y: '9em', delay: 600});
    $('.card-pair.three .card-mover.c2').transition({x: '-15em', y: '20em', delay: 800}, function () {
        $(this).css('z-index', 18);
    });
    $('.card-pair.three .card-mover.c1').transition({x: '-14em', y: '20em', delay: 1000});
    $('.card-pair.four .card-mover.c2').transition({x: '15em', y: '20em', delay: 1200}, function () {
        $(this).css('z-index', 18);
    });
    $('.card-pair.four .card-mover.c1').transition({x: '16em', y: '20em', delay: 1400});
    $('.card-pair.five .card-mover.c2').transition({x: '24em', y: '9em', delay: 1600}, function () {
        $(this).css('z-index', 18);
    });
    $('.card-pair.five .card-mover.c1').transition({x: '25em', y: '9em', delay: 1800});
    $('.card-pair.six .card-mover.c2').transition({x: '17em', y: '1em', delay: 2000}, function () {
        $(this).css('z-index', 18);
    });
    $('.card-pair.six .card-mover.c1').transition({x: '18em', y: '1em', delay: 2200});

    setTimeout(function () {
        $('.card-pair.four .card-wrapper').addClass("flipped f1");
    }, 2300);

    $('.progressbar-inner').transition({width: '100%', duration: 10000, easing: 'linear'});

});