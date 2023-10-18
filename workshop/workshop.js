//? 1. Create file index.js to work in.

//? 2. Write code that defines a constructor function called Car
//? that creates a new object with the following properties:
//? make, model, and year.

class Car{
    constructor(year, make, model,) {
        this.year = year;
        this.make = make;
        this.model = model;
    }
    //? 3. Add a method called getDescription to the Car prototype,
    //? which returns a string containing information about the car.
    getDescription() {
        return `This vehicle is a ${this.year} ${this.make} ${this.model}.`;
    }
};

//TODO----Car Test Set:
// const newCar = new Car(
//     2020,
//     'Tesla',
//     'CyberTruck',
// );
// console.log(newCar);
// console.log(newCar.getDescription());

//! CAR CLASS TEST RESULTS - - - - GOOD
//! Car { year: 2020, make: 'Tesla', model: 'CyberTruck' } (REF lines: 21 - 26)
//! This vehicle is a 2020 Tesla CyberTruck. (REF lines: 15 - 17 && 27)

//? 4. Define the ElectricCar function as a subclass of Car. Include an
//? additional property called range that represents the range of the electric
//? car in miles.

class ElectricCar extends Car{
    constructor(year, make, model, range) {
        super(year, make, model,);
        this.range = range;
    }
    //? 5. Have the ElectricCar prototype override the getDescription method of 
    //? the Car prototype with a new implementation that includes information 
    //? about the range of the electric car.
    getDecription() {
        return `${super.getDescription} This electric model has a range of ${this.range} miles.`;
    }
};

//? 6. Create an instance of ElectricCar with the make "Tesla", model "Model S", year 
//? 2019, and range 300, and the getDescription method is called on the instance.The 
//? output will be a string containing the make, model, year, and range of the electric 
//? car.
//TODO----ElectricCar Test Set:
const newElectricCar = new Car(
    2019,
    'Tesla',
    'Model S',
     300,
);
console.log(newElectricCar);
console.log(newElectricCar.getDescription());

//! ELECTRICCAR CLASS TEST RESULTS - - - - GOOD
//! Car { year: 2019, make: 'Tesla', model: 'Model S' } (REF Lines: 51 - 57)
//! This vehicle is a 2019 Tesla Model S. (REF Lines: 45 - 47 && 58)