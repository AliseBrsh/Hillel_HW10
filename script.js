function Vehicle (model, year) {

    this.model = model;
    this.year = year;

    return (this.model, this.year);

};

Vehicle.prototype.start = function(){
    return ("The engine has been started");
}

Vehicle.prototype.end = function(){
    return ("Engine was off");
}

Vehicle.prototype.toString = function(){
    return (`The model is ${this.model}. Release year ${this.year}`);
}

function Car (model, year) {
    this.numWheels = 4;
    Vehicle.call(this, model, year);
}

Car.prototype = Object.create(Vehicle.prototype);

function Motorcycle (model, year) {
    this.numWheels = 2;
    Vehicle.call(this, model, year);
}

Motorcycle.prototype = Object.create(Vehicle.prototype);


const car = new Car('Tesla', 2020);

console.log(car.model); 
console.log(car.year); 
console.log(car.numWheels); 
console.log(car.start()); 
console.log(car.end()); 
console.log(car.toString()); 

const motorcycle = new Motorcycle('Suzuki', 2006);

console.log(motorcycle.model); 
console.log(motorcycle.year); 
console.log(motorcycle.numWheels); 
console.log(motorcycle.start()); 
console.log(motorcycle.end()); 
console.log(motorcycle.toString()); 

