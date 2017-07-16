describe("BookingDetail", function() {
    it("#constructor should create a new instance of bookingDetail", function() {
        let instanceBookingDetail = new BookingDetail({
            idBookingDetail: 12,
            dateStart: "2017/02/02",
            dateEnd: "2017/04/02",
            numberPlate: "6445FHX",
            gasoline: 5,
            status: "delivered",
            totalPrice: 255
        });

        expect(instanceBookingDetail.getDateEnd()).toBe("2017/04/02");
        expect(instanceBookingDetail.getStatus()).toBe("delivered");
    });

    it("#function equals should return true", function() {
        let instanceBookingDetail = new BookingDetail({
            numberPlate: "6445FHX",
            dateStart: "2017/02/02",
            dateEnd: "2017/04/02"
        });

        let detail = {
            numberPlate: "6445FHX",
            dateStart: "2017/02/02",
            dateEnd: "2017/04/02"
        }

        expect(instanceBookingDetail.equals(detail)).toBe(true);
    });

});