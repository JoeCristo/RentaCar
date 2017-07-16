describe("Booking", function() {

    it("#constructor should create a new instance of booking", function() {
        let instanceBooking = new Booking({
            idBooking: 1,
            date: "2017/02/02"
        });

        expect(instanceBooking.getIdBooking()).toBe(1);
        expect(instanceBooking.getDate()).toBe("2017/02/02");
    });


});