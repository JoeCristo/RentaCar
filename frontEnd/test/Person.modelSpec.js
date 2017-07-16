describe("Person", function() {

    it("#constructor should create a new instance of Person", function() {
        let instancePerson = new Person({
            dniPerson: "76778898N",
            namePerson: "Cristo Arana"
        });

        expect(instancePerson.getNamePerson()).toBe("Cristo Arana");
        expect(instancePerson.getDniPerson()).toBe("76778898N");
    });

    it("#function equals should return false", function() {
        let instancePerson = new Person({
            dniPerson: "76778898N",
            namePerson: "Cristo Arana"
        });

        let person = {
            dniPerson: "76884769H"
        }

        expect(instancePerson.equals(person)).toBe(false);
    });

    it("#function equals should return false", function() {
        try {
            new Person({
                dniPerson: '7688df677H'
            });

        } catch (e) {
            expect(e instanceof RentaCarERROR).toBeTruthy();
            expect(e.message).toBe("DNI incorrecto");

        }
    });

});