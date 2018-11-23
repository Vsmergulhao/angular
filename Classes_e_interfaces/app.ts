class Spacecraft {
    constructor(public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

class MilenniuFalcon extends Spacecraft implements Containership {

cargoContairners : number

    constructor(){
        super('hyperdrive')
        this.cargoContairners = 4
    }

    jumpIntoHyperspace(){
        if (Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        } else {console.log('Failed to jump into hyperspace')}
    }
}

let falcon = new MilenniuFalcon()

falcon.jumpIntoHyperspace()

interface Containership{
    cargoContairners: number
}


let goodForTheJob = (ship: Containership) => ship.cargoContairners > 2
console.log(`Is falcon good for the job ${goodForTheJob(falcon)}`)