let personService = (function() {

    let agency = new Map;
    let idPerson = 0;
    let idBooking = 0;
    let idBookingDetail = 0;
    let idEmployee = 0;

    let init = function(parsedJSON) {
        agency.set(CLIENTS, []);
        agency.set(EMPLOYEES, []);
        createInstancesOfPeople(parsedJSON);
    }

    let createInstancesOfPeople = function(parsedJSON) {
        createInstaceClient(parsedJSON[CLIENTS]);
        createInstanceEmployee(parsedJSON[EMPLOYEES]);
        return true;
    }

    let createInstaceClient = function(clients) {
        clients.forEach(client => {
            client.idClient = setIdPerson();
            client.booking = incrementIdBooking(client.booking);
            try {
                agency.get(CLIENTS).push(new Client(client));
            } catch (e) {
                throw e;
            }
        });
    }

    let createInstanceEmployee = function(employees) {
        employees.forEach(employee => {
            employee.idEmployee = setIdEmployee();
            agency.get(EMPLOYEES).push(new Employee(employee));
        });
        return true;
    }

    let addClient = function(client) {
        if (!checkIfClientExist(client.dniPerson).found) {
            client.idClient = setIdPerson();
            try {
                agency.get(CLIENTS).push(new Client(client));
            } catch (e) { throw e };
            return true;
        } else {
            return false;
        }

    }

    let updateClient = function(client) {
        let clients = agency.get(CLIENTS);
        let data = checkIfClientExist(client.dniPerson);
        if (data.found) {
            try {
                clients[data.position].setNamePerson(client.namePerson);
                clients[data.position].setAddress(client.address);
                clients[data.position].setPhone(client.phone);
            } catch (e) { throw e };
            return true;
        } else return false;
    }

    let addBooking = function(client) {
        let clients = agency.get(CLIENTS);
        let aBooking = client.booking;
        let data = checkIfClientExist(client.dniPerson);
        client.booking = incrementIdBooking(client.booking);
        if (data.found) {
            clients[data.position].setBooking(aBooking);

            console.log(agency.get(CLIENTS));
            return true;
        } else {
            agency.get(CLIENTS).push(new Client(client));
            return false;
        }

    }

    // CLIENT DEBERA CONTENER EL DNIPERSON, IDBOOKING Y EL BOOKINGDETAIL
    let getBookingForUpdate = function(client) {
        let clients = agency.get(CLIENTS);
        let data = checkIfClientExist(client.dniPerson);
        let bookings = clients[data.position].getBooking();
        findBookingDetail(bookings, client);
    }

    let findBookingDetail = function(bookings, client) {
        let position = 0;
        let bookingDetails = [];
        let aBooking = Array.from(bookings);
        for (let i = 0, len = aBooking.length; i < len; ++i) {
            if (aBooking[i].date == client.currentDateBooking) {
                bookingDetails = aBooking[i].bookingDetail;
                updateBookingDetail(bookingDetails, client.booking[i].bookingDetail);
            }
        }
    }

    let updateBookingDetail = function(bookingDetails, clientBookingDetail) {
        let abookingDetails = Array.from(bookingDetails);
        for (let i = 0, len = abookingDetails.length; i < len; ++i) {
            if (abookingDetails[i].dateStart == clientBookingDetail[i].dateStart) {
                abookingDetails[i].setDateStart(clientBookingDetail[i].dateStart);
                abookingDetails[i].setDateEnd(clientBookingDetail[i].dateEnd);
                abookingDetails[i].setNumberPlate(clientBookingDetail[i].numberPlate);
                abookingDetails[i].setGasoline(clientBookingDetail[i].gasoline);
                abookingDetails[i].setStatus(clientBookingDetail[i].status);
                abookingDetails[i].setTotalPrice(clientBookingDetail[i].totalPrice);
                return true;
            } else { return false };

        }
    }

    let addEmployee = function(employee) {
        if (!checkIfEmployeeExist(employee.dniPerson).found) {
            employee.idEmployee = incrementId();
            try {
                agency.get(EMPLOYEES).push(new Employee(employee));
            } catch (e) { throw e };
            return true;
        } else {
            return false;
        }
    }

    let checkIfClientExist = function(dniPerson) {
        let clients = agency.get(CLIENTS);
        let len = clients.length,
            i = 0;
        let found = false;
        let data = {};
        while (!found && i < len) {
            if (clients[i].getDniPerson() == dniPerson) {
                found = true;
            }
            ++i;
        }
        data = { found: found, position: i - 1 };
        return data;
    }

    let checkIfEmployeeExist = function(dniPerson) {
        let employees = agency.get(EMPLOYEES);
        let len = employees.length,
            i = 0;
        let found = false;
        let data = {};
        while (!found && i < len) {
            (employees[i].getDniPerson() == dniPerson) ? found = true: false;
            ++i;
        }
        data = { found: found, position: i - 1 };
        return data;
    }

    let inactivateClient = function(dniPerson) {
        let clients = agency.get(CLIENTS);
        let data = checkIfClientExist(dniPerson);
        if (data.found) {
            if (clients[data.position].getStatus() == ACTIVE) clients[i].setStatus(INACTIVE);
            active = false;
        }
        return active;
    }

    let inactivateEmployee = function(dniPerson) {
        let employess = agency.get(EMPLOYEES);
        let data = checkIfEmployeeExist(dniPerson);
        if (data.found) {
            if (employees[data.position].getStatus() == ACTIVE) employees[i].setStatus(INACTIVE);
            active = false;
        }
        return active;
    }

    let getAllClients = function() {
        return agency.get(CLIENTS);
    }

    let getClient = function(dniPerson) {
        let clients = agency.get(CLIENTS);
        let data = checkIfClientExist(dniPerson);
        if (data.found) return clients[data.position];
        else return false;
    }

    let getClientByBookingDate = function(dateBooking) {
        let clients = agency.get(CLIENTS);
        let foundedClient = {};
        clients.forEach(client => {
            client.booking.forEach(bookin => {
                if (bookin.date == dateBooking) foundedClient = client;
            })
        });
        return foundedClient;
    }

    let getEmployee = function(dniPerson) {
        let employess = agency.get(EMPLOYEES);
        let data = checkIfEmployeeExist(dniPerson);
        if (data.found) return employess[data.position];
        else return false;
    }

    let getAllEmployess = function() {
        return Array.from(agency.get(EMPLOYEES));
    }

    let setIdPerson = function() {
        return ++idPerson;
    }
    let setIdBooking = function() {
        return ++idBooking;
    }

    let setIdBookingDetail = function() {
        return ++idBookingDetail;
    }

    let setIdEmployee = function() {
        return ++idEmployee;
    }

    let incrementIdBooking = function(booking) {
        for (let i = 0, len = booking.length; i < len; ++i) {
            booking[i].idBooking = setIdBooking();
            let bookingDetail = booking[i].bookingDetail;
            for (let x = 0, len = bookingDetail.length; x < len; ++x) {
                bookingDetail[x].idBookingDetail = setIdBookingDetail();
            }
        }
        return booking;
    }

    return {
        init,
        addClient,
        inactivateClient,
        getAllClients,
        getClient,
        updateClient,
        addBooking,
        getBookingForUpdate,
        addEmployee,
        getAllEmployess,
        getEmployee,
        inactivateEmployee,
        getClientByBookingDate
    };

})();