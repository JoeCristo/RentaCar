describe("Employee", function() {

    it("#constructor should create a new instance of Employee", function() {
        let instanceEmployee = new Employee({
            idEmployee: 1,
            idPerson: 3,
            namePerson: "Pepito",
            dniPerson: "88776655L",
        });

        expect(instanceEmployee.getIdEmployee()).toBe(1);
        expect(instanceEmployee.getIdPerson()).toBe(3);
        expect(instanceEmployee.getNamePerson()).toBe("Pepito");
        expect(instanceEmployee.getDniPerson()).toBe("88776655L");
    });

    it("#function equals should return false", function() {
        let instanceEmployee = new Employee({
            idEmployee: 1,
            dniPerson: "76778898N",
            namePerson: "Cristo Arana"
        });

        let employee = {
            dniPerson: "76778898N"
        }

        expect(instanceEmployee.equals(employee)).toBe(true);
    });
});