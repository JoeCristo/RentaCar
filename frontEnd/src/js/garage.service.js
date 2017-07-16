let garageService = (function() {

    let agency = new Map;
    let id = 0;

    let init = function(parsedJSON) {
        agency.set(GARAGES, []);
        createInstances(parsedJSON);
    }

    let createInstances = function(parsedJSON) {
        createInstancesOfGarage(parsedJSON[GARAGES]);
    }

    let createInstancesOfGarage = function(garages) {
        garages.forEach(garage => {
            garage.idGarage = incrementId();
            garage.car.forEach(car => {
                car.idCar = incrementId();
            });
            agency.get(GARAGES).push(new Garage(garage));
        });
    }

    let addCar = function(garage) {
        let data = checkIfCarExist(garage);
        let carGarage = agency.get(GARAGES)[data.positionGarage];
        if (!data.foundCar) {
            garage.car.idCar = incrementId();
            carGarage.getCar().add(new Car(garage.car));
            return true;
        } else {
            return false;
        }
    }

    let updateCar = function(garage) {
        let data = checkIfCarExist(garage);
        let carGarage = agency.get(GARAGES)[data.positionGarage];
        if (data.foundCar) {
            data.car.setNumberPlate(garage.car.numberPlate);
            data.car.setModel(garage.car.model);
            data.car.setColor(garage.car.color);
            data.car.setBrand(garage.car.brand);
            data.car.setPriceByDay(garage.car.priceByDay);
        }
    }

    let deleteCar = function(garage) {
        let deleteCar = false;
        let data = checkIfCarExist(garage);
        let carGarage = agency.get(GARAGES)[data.positionGarage];
        if (data.foundCar) {
            carGarage.getCar().forEach(car => {
                if (car.numberPlate == garage.car.numberPlate) {
                    carGarage.getCar().delete(car);
                    deleteCar = true;
                }
            });
        }
        return deleteCar;
    }

    let checkIfCarExist = function(garage) {
        let carGarage = agency.get(GARAGES);
        let car = {};
        let len = carGarage.length,
            i = 0;
        let foundCar = false;
        let data = {};
        while (!foundCar && i < len) {
            if (garage.idGarage == carGarage[i].getIdGarage()) {
                for (let index of carGarage[i].getCar().values()) {
                    if (index.numberPlate == garage.car.numberPlate) {
                        foundCar = true;
                        car = index;
                        break;
                    }
                }
                ++i;
            }
        }
        data = { foundCar: foundCar, positionGarage: i - 1, car: car };
        return data;
    }

    let getCars = function() {
        let garages = agency.get(GARAGES);
        let aCar = [];
        garages.forEach(garage => {
            garage.car.forEach(car => {
                aCar.push(car);
            });

        });
        return aCar;
    }

    let getCar = function(numberPlate) {
        let garages = agency.get(GARAGES);
        let currentCar = {};
        garages.forEach(garage => {
            garage.car.forEach(car => {
                if (numberPlate == car.numberPlate) {
                    currentCar = car;
                }
            });
        });
        return currentCar;
    }

    let incrementId = function() {
        return ++id;
    }

    return {
        init,
        addCar,
        deleteCar,
        getCars,
        updateCar,
        getCar
    };

})();