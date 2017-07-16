describe("Car", function() {

    let instanceCar = new Car({
        idCar: 12,
        model: "Fiesta",
        color: "Black",
        numberPlate: "6445FHX",
        brand: "Ford",
        priceByDay: 65.98
    });

    it("#constructor should create a new instance of bookingDetail", function() {

        expect(instanceCar.getModel()).toBe("Fiesta");
        expect(instanceCar.getPriceByDay()).toBe(65.98);
        expect(instanceCar.getNumberPlate()).toBe("6445FHX");
        expect(instanceCar.getColor()).toBe("Black");
        expect(instanceCar.getBrand()).toBe("Ford");
    });

    it("#function equals should return true", function() {
        instanceCar = new Car({
            numberPlate: "6445FHX"
        });

        let car = {
            numberPlate: "6445FHX"
        }
        expect(instanceCar.equals(car)).toBe(true);
    });

});