var cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits = ['h', 'c', 'd', 's'];// ["hearts","clubs","diamonds","spades"]

module.exports = function (_io) {
    return function () {
        return new Game({io: _io})
    };
}

function Game(opts) {
    var self = this;
    self.id = ID.generate();



    var io = opts.io;
    var hold = [];
    _.each(suits, function (suit) {
        _.each(cards, function (card) {
            hold.push(new Card({val: card, suit: suit}))
        })
    })
    console.log(hold);
    hold = _.shuffle(hold);


}

function Card(opts) {
    var self = this;
    self.id = ID.generate();
    self.suit = opts.suit;
    self.val = opts.val;

}