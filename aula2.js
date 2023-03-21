//TUPLE
var a = [
    ['url', 'http://github.com'],
    ['port', 5500],
    ['Líria Li4', 'http://github.com/liriali4']
];
function tuple() {
    a.forEach(function (element) {
        console.log(element[0]);
    });
}
tuple();
//Enum
var cardSuits;
(function (cardSuits) {
    cardSuits[cardSuits["Clubs"] = 0] = "Clubs";
    cardSuits[cardSuits["Hearts"] = 1] = "Hearts";
    cardSuits[cardSuits["Spades"] = 2] = "Spades";
    cardSuits[cardSuits["Diamonds"] = 3] = "Diamonds";
})(cardSuits || (cardSuits = {}));
function eNum() {
    var x = 0;
    if (x === cardSuits.Clubs) {
        alert("True");
    }
    else {
        alert("False");
    }
    console.log(cardSuits.Clubs);
}
eNum();
