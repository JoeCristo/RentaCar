function Garage(garage) {
    this.setIdGarage(garage.idGarage);
    this.car = new Set;
    this.setCar(garage.car || new Set);
}

Garage.prototype.getIdGarage = function() {
    return this.idGarage;
}

Garage.prototype.setIdGarage = function(idGarage) {
    this.idGarage = idGarage;
}

Garage.prototype.getCar = function() {
    return this.car;
}

Garage.prototype.setCar = function(car) {
    for (let index in car) {
        this.car.add(new Car(car[index]));
    }
}