var message;
var episode = 4;
console.log("This is epsode:" + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid; //váriavel fica do tipo any
favoriteDroid = 'BB-8'; //inicialmente a variável é uma string
console.log("My favorite Droid " + favoriteDroid);
favoriteDroid = 10; //depois a variável vira number
console.log("My favorite Droid " + favoriteDroid);
var ddd;
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy " + name + "?"); };
call('João');
