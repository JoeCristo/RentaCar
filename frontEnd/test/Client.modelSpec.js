describe("Client", function() {

    it("#constructor should create a new instance of client", function() {
        try {
            let instanceClient = new Client({
                idClient: 1,
                address: "C/ Saxofon",
                phone: "658774466",
            });
            expect(instanceClient.getIdClient()).toBe(1);
            expect(instanceClient.getAddress()).toBe("C/ Saxofon");
            expect(instanceClient.getPhone()).toBe("658774466");
        } catch (e) {}
    });

    it("#constructor should create a new instance of client with employee and endorsed", function() {
        try {
            let instanceClient = new Client({
                idClient: 1,
                address: "C/ Saxofon",
                phone: "658774466",
                dniPerson: "77889966T",
                namePerson: "Paco Perez",
                employee: { idEmployee: 2 },
                endorsed: {
                    idClient: 3,
                    address: "C/ Tuller",
                    phone: "654324466",
                }
            });

            expect(instanceClient.getEmployee().idEmployee).toBe(2);
            expect(instanceClient.getEndorsed().address).toBe("C/ Tuller");
            expect(instanceClient.getDniPerson()).toBe("77889966T");
            expect(instanceClient.getNamePerson()).toBe("Paco Perez");
        } catch (e) {}

    });

    it("#function equals should return false", function() {
        try {
            let instanceClient = new Client({
                idClient: 1,
                dniPerson: "76778898N",
                namePerson: "Cristo Arana"
            });

            let client = {
                dniPerson: "76884769H"
            }

            expect(instanceClient.equals(client)).toBe(false);
        } catch (e) {};

    });
});