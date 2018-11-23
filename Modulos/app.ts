import {Spacecraft, Containership} from './base-ships'
import {MilenniuFalcon} from './starfitghters'

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MilenniuFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: Containership) => ship.cargoContairners > 2
console.log(`Is falcon good for the job ${goodForTheJob(falcon)}`)