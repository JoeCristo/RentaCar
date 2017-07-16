window.view = (function(context) {

    let inputDateStart = context.getElementById("inputDateStart");
    let inputDateEnd = context.getElementById("inputDateEnd");
    let inputNumberPlate = context.getElementById("inputNumberPlate");
    let inputGasoline = context.getElementById("inputGasoline");
    let inputDelivered = context.getElementById("inputDelivered");
    let inputUndelivered = context.getElementById("inputUndelivered");
    let inputClient = context.getElementById("inputClient");
    let btnSaveBooking = context.getElementById("btnSaveBooking");
    let btnUpdateBooking = context.getElementById("btnUpdateBooking");
    let btnClean = context.getElementById("btnClean");
    let showMessage = context.getElementById("showMessage");
    let spanNamePerson = context.getElementById("spanNamePerson");
    let spanDniPerson = context.getElementById("spanDniPerson");
    let spanAddress = context.getElementById("spanAddress");
    let spanPhone = context.getElementById("spanPhone");
    let spanBrand = context.getElementById("spanBrand");
    let spanModel = context.getElementById("spanModel");
    let spanColor = context.getElementById("spanColor");
    let spanPriceByDay = context.getElementById("spanPriceByDay");
    let inputTotalDays = context.getElementById("inputTotalDays");
    let btnTotalPrice = context.getElementById("btnTotalPrice");
    let inputTotalPrice = context.getElementById("inputTotalPrice");
    let divBookingList = context.getElementById("divBookingList");
    let spanDateBooking = context.getElementById("spanDateBooking");
    let currentDateBooking = '';
    let dateWithinHour = moment().format(FORMAT_NO_HOUR);
    let dateStartMoment = '';
    let currentClient = '';
    let currentCar = '';
    let divClient = [];
    let controller = '';


    let init = function(controller) {
        this.controller = controller;
        inputClient.addEventListener("change", controller.getSelectClient);
        inputNumberPlate.addEventListener("change", controller.getSelectCar);
        btnSaveBooking.addEventListener("click", controller.addBooking);
        btnTotalPrice.addEventListener("click", controller.calculatePriceTotal);
        inputTotalDays.addEventListener("click", controller.calculateDateEnd);
        btnUpdateBooking.addEventListener("click", controller.updateBooking);
        btnClean.addEventListener("click", cleanInputs);
        spanDateBooking.innerHTML = dateWithinHour;
    }

    let showAllBookings = function(clients) {
        divBookingList.innerHTML = '';
        clients.forEach(client => {
            client.booking.forEach(booking => {
                divBookingList.innerHTML += '<div id="' + booking.date + '" class="listBookin">' +
                    '<span class="col-8 col-offset-1" id="' + booking.date + '">' +
                    client.dniPerson + '</span><span class="col-7" id="' + booking.date + '">' +
                    client.namePerson + '</span><span class="status" id="' + booking.date + '">' +
                    booking.date + '</div>';
            });
        });
        divClient = context.getElementsByClassName("listBookin");
        addEventListBooking();
    }

    let addEventListBooking = function() {
        for (let i = 0, len = divClient.length; i < len; ++i) {
            divClient[i].addEventListener("dblclick", this.controller.showDataBooking);
        }
    }

    let fillSelectClients = function(clients) {
        clients.forEach(client => {
            inputClient.innerHTML += '<option value="' + client.dniPerson + '">' +
                client.dniPerson + '</option>';
        });
    }

    let fillSelectCars = function(cars) {
        cars.forEach(car => {
            inputNumberPlate.innerHTML += '<option value="' + car.numberPlate + '">' +
                car.numberPlate + '</option>';
        });
    }

    let setCurrentValueSelectClient = function() {
        currentClient = inputClient.value;
        return currentClient;
    }

    let setCurrentValueSelectCar = function() {
        currentCar = inputNumberPlate.value;
        return currentCar;
    }

    let showDataCar = function(car) {
        showMessage.innerHTML = '';
        spanBrand.innerHTML = car.brand;
        spanModel.innerHTML = car.model;
        spanColor.innerHTML = car.color;
        spanPriceByDay.innerHTML = car.priceByDay;
    }

    let showDataClient = function(client) {
        spanNamePerson.innerHTML = client.namePerson;
        spanDniPerson.innerHTML = client.dniPerson;
        spanAddress.innerHTML = client.address;
        spanPhone.innerHTML = client.phone;
    }

    let checkInputsEmpty = function() {
        if (inputDateStart.value == '' || inputDateEnd.value == '' ||
            inputGasoline.value == '' || spanBrand.innerHTML == '' ||
            inputTotalDays.value == '' || inputTotalPrice.value == '' ||
            spanNamePerson.innerHTML == '') {
            return false;
        } else {
            return true;
        }
    }

    let addBooking = function() {
        let dateNow = moment().format(FORMAT_DATE);
        let statusCar = getStatusCar();
        let client = {
            currentDateBooking: currentDateBooking,
            dniPerson: spanDniPerson.innerHTML,
            namePerson: spanNamePerson.innerHTML,
            address: spanAddress.innerHTML,
            phone: spanPhone.innerHTML,
            booking: [{
                idBooking: "",
                date: dateNow,
                bookingDetail: [{
                    idBookingDetail: "",
                    dateStart: inputDateStart.value,
                    dateEnd: inputDateEnd.value,
                    numberPlate: inputNumberPlate.value,
                    gasoline: inputGasoline.value,
                    status: statusCar,
                    totalPrice: inputTotalPrice.value
                }]
            }]
        }
        return client;
    }

    let calculatePriceTotal = function() {
        if (spanPriceByDay.innerHTML == '') showMessageIncorrect(NO_CAR_SELECT);
        else if (inputTotalDays.value == '') showMessageIncorrect(NO_DAYS);
        else {
            inputTotalPrice.value = parseInt(spanPriceByDay.innerHTML) * parseInt(inputTotalDays.value);
        }
    }

    let calculateDateEnd = function() {
        let correct = moment(inputDateStart.value, FORMAT_DATE).isValid();
        if (!correct) {
            showMessageIncorrect(INCORRECT_DATE);
        } else {
            dateStartMoment = moment(inputDateStart.value).format(FORMAT_DATE);
            let dateEnd = moment(dateStartMoment).add(inputTotalDays.value, DAYS).format(FORMAT_DATE);
            inputDateEnd.value = dateEnd;
            showMessage.innerHTML = '';
        }
    }

    let getDataBooking = function(client, dateBooking) {
        spanDateBooking.innerHTML = dateBooking;
        spanDniPerson.innerHTML = client.dniPerson;
        spanNamePerson.innerHTML = client.namePerson;
        spanAddress.innerHTML = client.address;
        spanPhone.innerHTML = client.phone;
        inputClient.value = client.dniPerson;
        client.booking.forEach(bookin => {
            if (bookin.date == dateBooking) {
                dateBooking.innerHTML = bookin.date;
                bookin.bookingDetail.forEach(detail => {
                    inputDateStart.value = detail.dateStart;
                    inputDateEnd.value = detail.dateEnd;
                    inputGasoline.value = detail.gasoline;
                    inputTotalPrice.value = detail.totalPrice;
                    if (detail.status == inputDelivered.value) inputDelivered.checked = true;
                    else inputUndelivered.checked = true;
                    getDataCarForShowBooking(detail.numberPlate);
                });
            }
        });
    }

    let getDataCarForShowBooking = function(numberPlate) {
        let car = this.controller.getCarForUpdate(numberPlate);
        inputNumberPlate.value = numberPlate;
        spanBrand.innerHTML = car.brand;
        spanModel.innerHTML = car.model;
        spanColor.innerHTML = car.color;
        spanPriceByDay.innerHTML = car.priceByDay;
        showMessage.innerHTML = '';
    }

    let getStatusCar = function() {
        if (inputDelivered.checked) return inputDelivered.value;
        else return inputUndelivered.value;
    }

    let showMessageCorrect = function(message) {
        showMessage.style.color = COLOR_PRIMARY;
        showMessage.innerHTML = message;
    }

    let showMessageIncorrect = function(message) {
        showMessage.style.color = COLOR_WARRNIG;
        showMessage.innerHTML = message;
    }

    let setCurrentDateBooking = function(dateBooking) {
        currentDateBooking = dateBooking;
    }

    let cleanInputs = function() {
        spanBrand.innerHTML = '';
        spanModel.innerHTML = '';
        spanColor.innerHTML = '';
        spanPriceByDay.innerHTML = '';
        spanNamePerson.innerHTML = '';
        spanDniPerson.innerHTML = '';
        spanAddress.innerHTML = '';
        spanPhone.innerHTML = '';
        inputDateStart.value = '';
        inputDateEnd.value = '';
        inputGasoline.value = '';
        inputTotalDays.value = '';
        inputTotalPrice.value = '';
        inputClient.value = 'select client';
        inputNumberPlate.value = 'select car';
        spanDateBooking.innerHTML = dateWithinHour;
        showMessage.innerHTML = '';
    }

    return {
        init,
        showAllBookings,
        fillSelectClients,
        fillSelectCars,
        setCurrentValueSelectClient,
        setCurrentValueSelectCar,
        showDataCar,
        showDataClient,
        checkInputsEmpty,
        showMessageCorrect,
        showMessageIncorrect,
        addBooking,
        calculatePriceTotal,
        cleanInputs,
        calculateDateEnd,
        getDataBooking,
        setCurrentDateBooking
    }

})(window.document);