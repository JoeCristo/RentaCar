function Car(car) {
    this.setIdCar(car.idCar);
    this.setNumberPlate(car.numberPlate);
    this.setModel(car.model);
    this.setColor(car.color);
    this.setBrand(car.brand);
    this.setPriceByDay(car.priceByDay);
}

Car.prototype.getIdCar = function() {
    return this.idCar;
}

Car.prototype.setIdCar = function(idCar) {
    this.idCar = idCar;
}

Car.prototype.getNumberPlate = function() {
    return this.numberPlate;
}

Car.prototype.setNumberPlate = function(numberPlate) {
    this.numberPlate = numberPlate;
}

Car.prototype.getModel = function() {
    return this.model;
}

Car.prototype.setModel = function(model) {
    this.model = model;
}

Car.prototype.getColor = function() {
    return this.color;
}

Car.prototype.setColor = function(color) {
    this.color = color;
}

Car.prototype.getBrand = function() {
    return this.brand;
}

Car.prototype.setBrand = function(brand) {
    this.brand = brand;
}

Car.prototype.getPriceByDay = function() {
    return this.priceByDay;
}

Car.prototype.setPriceByDay = function(priceByDay) {
    this.priceByDay = priceByDay;
}

Car.prototype.equals = function(car) {
    return this.numberPlate == car.numberPlate;
}