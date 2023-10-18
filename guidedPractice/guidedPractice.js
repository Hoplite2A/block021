//? 1. Create a JavaScript class of Home. Include the following:
//? A construct that accepts rooms, bathrooms, and squareFeet
//? A method that uses the `this` keyword to return the number of rooms, bathrooms, and how many square feet

class Home {
  constructor(rooms, bathrooms, squarefeet) {
    this.rooms = rooms;
    this.bathrooms = bathrooms;
    this.squarefeet = squarefeet;
  }
  printHome() {
    return `This property has ${this.rooms} rooms, ${this.bathrooms} bathrooms, and has a total of ${this.squarefeet} squarefeet of livable space.`;
  }
}

//? 2. Create a SingleFamilyHome subclass. Include all of the Home parameters plus yardSize.

class SingleFamilyHome extends Home {
  constructor(rooms, bathrooms, squarefeet, yardSize) {
    super(rooms, bathrooms, squarefeet);
    this.yardSize = yardSize;
  }
  printHome() {
    return `${super.printHome()} This single family home also includes a ${
      this.yardSize
    } acres yard.`;
  }
}

//? 3. Create an Apartment subclass. Include all of the Home parameters plus which floor the unit is on.

class Apartment extends Home {
  constructor(rooms, bathrooms, squarefeet, floor) {
    super(rooms, bathrooms, squarefeet);
    this.floor = floor;
  }
  printHome() {
    return `${super.printHome()} This apartment is located on floor ${
      this.floor
    } of the apartment building.`;
  }
}

//TODO   Home Test
// const newHome = new Home(
//     2,
//     2.5,
//     1250,
// );
// console.log(newHome);
// console.log(newHome.printHome());
//TODO   SFH Test
// const newSFH = new SingleFamilyHome(
//     2,
//     2.5,
//     1250,
//     2.5
// );
// console.log(newSFH);
// console.log(newSFH.printHome());
//TODO   Apartment Test
const newApartment = new Apartment(2, 2.5, 1250, "2nd");
console.log(newApartment);
console.log(newApartment.printHome());
