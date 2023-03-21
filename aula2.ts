//TUPLE
let a: [string,any] [] = [
    ['url', 'http://github.com'],
    ['port', 5500],
    ['Líria Li4', 'http://github.com/liriali4']
];

function tuple(){
    a.forEach(element => {
        console.log(element[0]);
    });
}

tuple();

//Enum
enum cardSuits {
    Clubs,
    Hearts,
    Spades,
    Diamonds
}

function eNum() {
    let x = 0;
    if(x === cardSuits.Clubs) {
        alert("True");
    }else{
        alert("False");
    }
    console.log(cardSuits.Clubs)
}

eNum();