window.controller = (function() {

    let self;

    let init = function(bookingView, httpService, personService, garageService) {
        self = this;
        self._bookingView = bookingView;
        self._httpService = httpService;
        self._personService = personService;
        self._garageService = garageService;
        initServices();
    }

    let initServices = function() {
        self._bookingView.init(self);
        initFunctions();
    }

    let initFunctions = function() {
        self._bookingView.showAllBookings(self._personService.getAllClients());
        self._bookingView.fillSelectClients(self._personService.getAllClients());
        self._bookingView.fillSelectCars(self._garageService.getCars());
    }

    let getSelectClient = function() {
        let currentClient = self._bookingView.setCurrentValueSelectClient();
        let clientData = self._personService.getClient(currentClient);
        self._bookingView.showDataClient(clientData);
    }

    let getSelectCar = function() {
        let currentCar = self._bookingView.setCurrentValueSelectCar();
        let carData = self._garageService.getCar(currentCar);
        self._bookingView.showDataCar(carData);
    }

    let getCarForUpdate = function(numberPlate) {
        let carData = self._garageService.getCar(numberPlate);
        return carData;
    }

    let addBooking = function() {
        if (!self._bookingView.checkInputsEmpty()) {
            self._bookingView.showMessageIncorrect(FILL_FIELDS);
        } else {
            self._personService.addBooking(self._bookingView.addBooking());
            self._bookingView.showMessageCorrect(ADD_BOOKING);
            showListBooking();
            self._bookingView.cleanInputs();
        }
    }

    let showListBooking = function() {
        self._bookingView.showAllBookings(self._personService.getAllClients());
    }

    let updateBooking = function() {
        if (!self._bookingView.checkInputsEmpty()) {
            self._bookingView.showMessageIncorrect(FILL_FIELDS);
        } else {
            self._personService.getBookingForUpdate(self._bookingView.addBooking());
            self._bookingView.showMessageCorrect(ADD_BOOKING);
            self._bookingView.cleanInputs();
        }
    }

    let calculatePriceTotal = function() {
        self._bookingView.calculatePriceTotal();
    }

    let calculateDateEnd = function() {
        self._bookingView.calculateDateEnd();
    }

    let showDataBooking = function(event) {
        let dateBooking = event.target.id;
        self._bookingView.setCurrentDateBooking(dateBooking);
        let client = self._personService.getClientByBookingDate(dateBooking);
        self._bookingView.getDataBooking(client, dateBooking);
    }

    return {
        init,
        getSelectClient,
        getSelectCar,
        addBooking,
        calculatePriceTotal,
        calculateDateEnd,
        showDataBooking,
        getCarForUpdate,
        updateBooking
    };

})();