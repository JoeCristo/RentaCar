let httpService = (function() {

    let fake = `{
                 "clients" : [{
                    "idClient": "",
                    "dniPerson": "76885566N",
                    "namePerson": "Juan Corral",
                    "employee": { "idEmployee": 1, "namePerson": "Manuel Triguero", "dniPerson": "87865434F" },
                    "endorsed": { "namePerson": "Cristo Arana", "dniPerson": "64332211T" },
                    "address": "C/ Saxofon nº4",
                    "phone": "675884769",
                    "status": "Activo",
                    "booking": [{
                        "idBooking": "",
                        "date": "2017-01-15 13:22:00",
                        "bookingDetail": [{
                            "idBookingDetail": "",
                            "dateStart": "2017-01-20 17:00:00",
                            "dateEnd": "2017-01-22 17:00:00",
                            "numberPlate": "6745FKJ",
                            "gasoline": "20",
                            "status": "delivered",
                            "totalPrice": 130
                        }]
                    },{
                        "idBooking": "",
                        "date": "2016-11-25 17:32:00",
                        "bookingDetail": [{
                            "idBookingDetail": "",
                            "dateStart": "2016-12-01 13:00:00",
                            "dateEnd": "2016-12-04 17:00:00",
                            "numberPlate": "8845BBC",
                            "gasoline": "22",
                            "status": "undelivered",
                            "totalPrice": 75
                        }]     
                    }]
                 },{
                    "idClient": "",
                    "dniPerson": "64332211T",
                    "namePerson": "Cristo Arana",
                    "employee": { "idEmployee": 2, "namePerson": "Angela Prado", "dniPerson": "53627128P" },
                    "endorsed": { "namePerson": "Juan Corral", "dniPerson": "76885566N" },
                    "address": "C/ Marmoles 33",
                    "phone": "635455443",
                    "status": "Inactivo",
                    "booking": [{
                        "idBooking": "",
                        "date": "2016-09-09 17:22:00",
                        "bookingDetail": [{
                            "idBookingDetail": "",
                            "dateStart": "2016-09-18 17:00:00",
                            "dateEnd": "2016-09-20 17:00:00",
                            "numberPlate": "6745FKJ",
                            "gasoline": "20",
                            "status": "undelivered",
                            "totalPrice": 130
                        }]
                    },{
                        "idBooking": "",
                        "date": "2016-12-10 17:32:00",
                        "bookingDetail": [{
                            "idBookingDetail": "",
                            "dateStart": "2016-12-24 13:00:00",
                            "dateEnd": "2016-12-25 17:00:00",
                            "numberPlate": "8845BBC",
                            "gasoline": "22",
                            "status": "delivered",
                            "totalPrice": 75
                        }]     
                    }]
                 }],
                 "garages" : [{
                     "idGarage": "",
                     "car": [{
                         "idCar": "",
                         "numberPlate": "6745FKJ",
                         "model": "Clio",
                         "color": "Gris",
                         "brand": "Renault",
                         "priceByDay": 65
                     },{
                         "idCar": "",
                         "numberPlate": "8845BBC",
                         "model": "Ibiza",
                         "color": "Blanco",
                         "brand": "Seat",
                         "priceByDay": 80
                     }]
                 }] , 
                 "employees" : [{
                     "idEmployee": "",
                     "dniPerson": "87865434F",
                     "namePerson": "Manuel Triguero",
                     "status": "active"
                 },{
                     "idEmployee": "",
                     "dniPerson": "53627128P",
                     "namePerson": "Angela Prado",
                     "status": "active"
                 },{
                     "idEmployee": "",
                     "dniPerson": "75884768H",
                     "namePerson": "Juan Garrido",
                     "status": "inactive"
                 }]
        }`;

    let init = function() {
        let parsedJSON = JSON.parse(fake);
        return parsedJSON;
    }

    return {
        init
    };

})();