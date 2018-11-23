let message: string

let episode: number = 4
console.log("This is epsode:"+4)
episode = episode +1
console.log("Next episode is " + episode)

let favoriteDroid //váriavel fica do tipo any
favoriteDroid = 'BB-8' //inicialmente a variável é uma string
console.log("My favorite Droid "+favoriteDroid)
favoriteDroid = 10 //depois a variável vira number
console.log("My favorite Droid "+favoriteDroid)
let ddd : string


let isEnoughToBeatMF = function(parsecs: number): boolean {
    return parsecs < 12
}

let distance = 14

console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'}`)

let call = (name: string) => console.log(`Do you copy ${name}?`)
call('João')