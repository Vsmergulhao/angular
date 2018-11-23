import {Spacecraft, Containership} from './base-ships'

export class MilenniuFalcon extends Spacecraft implements Containership {

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
    