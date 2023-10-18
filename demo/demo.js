// const car1 = {
//     make: 'ford',
//     model: 'taurus',
//     year: 2015,
//     color: 'taupe',
// };

// class Car{
//     constructor(make, model, year, color) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
// }

// const car2 = new Car('chevy', '1500', 2019, 'grey',);

// console.log(car2);

class Vehicle {
    constructor(mode, propulsion, fuel) {
        this.mode = mode;
        this.propulsion = propulsion;
        this.fuel = fuel;
    }
}

class Car extends Vehicle{
    constrcutor(mode, propulsion, fuel, make, model, year, color) {
        super(mode, propulsion, fuel);
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    move() {
        console.log('moving');
    }
    printInfo() {
        console.log(`This vehicle is a ${this.mode} vehicle and has a ${this.propulsion}`)
    }
};

const newCar = new Car(
    'ground',
    'combustible engine',
    'gasoline',
    'chevy',
    '1500',
    2019,
    'grey',
);

console.log(newCar);

// CREATING METHODS:
newCar.move();