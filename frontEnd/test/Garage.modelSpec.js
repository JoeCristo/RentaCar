describe("Garage", function() {

    it("#constructor should create a new instance of Garage", function() {
        let instanceGarage = new Garage({
            idGarage: 1,
        });

        expect(instanceGarage.getIdGarage()).toBe(1);
    });

    it("#constructor should create a new instance of Garage with car Map", function() {
        carMap = [{
            idCar: 10,
            color: "Black",
            numberPlate: "6543GHF"
        }, {
            id: 11,
            color: "Black",
            numberPlate: "9988GHF"
        }];

        let instanceGarage = new Garage({
            idGarage: 1,
            car: carMap
        });

        //expect(instanceGarage.getCar()).toBe([]);
    });


});