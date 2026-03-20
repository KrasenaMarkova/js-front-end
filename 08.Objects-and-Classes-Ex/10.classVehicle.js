class Venicle {
    type;
    model;
    // при създаване ще е празен обект
    parts = {};
    fuel;

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts.engine = parts.engine;
        this.parts.power = parts.power;
        this.parts.quality = parts.engine * parts.power;
        this.fuel = fuel;
    }

    drive(fuelSpent) {
        this.fuel -= fuelSpent;
    }
}

// class Venicle {

//     constructor(type, model, parts, fuel) {
//         this.type = type;
//         this.model = model;
//         this.parts = {
//             engine: parts['engine'],
//             power: parts['power'],
//             quality: parts['engine'] * parts['power']
//         }
//         this.fuel = fuel;
//     }

//     drive(fuelSpent) {
//         this.fuel -= fuelSpent;
//     }
// }


let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);




