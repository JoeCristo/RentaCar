function Client(client) {
    this.setIdClient(client.idClient || -1);
    this.setEmployee(client.employee || {});
    this.setEndorsed(client.endorsed || {});
    this.setStatus(client.status || ACTIVE);
    this.booking = new Set();
    this.setBooking(client.booking || new Set);
    try {
        Person.call(this, client);
        this.setAddress(client.address);
        this.setPhone(client.phone);
    } catch (e) {
        throw e;
    }
}

Client.prototype = Object.create(Person.prototype);

Client.prototype.getIdClient = function() {
    return this.idClient;
}

Client.prototype.setIdClient = function(idClient) {
    this.idClient = idClient;
}

Client.prototype.getAddress = function() {
    return this.address;
}

Client.prototype.setAddress = function(address) {
    if (REGEXP_ADDRESS.test(address)) this.address = address;
    else throw new RentaCarERROR(INCORRECT_ADDRESS);
}

Client.prototype.getPhone = function() {
    return this.phone;
}

Client.prototype.setPhone = function(phone) {
    if (REGEXP_PHONE.test(phone)) this.phone = phone;
    else throw new RentaCarERROR(INCORRECT_PHONE);
}

Client.prototype.getEndorsed = function() {
    return this.endorsed;
}

Client.prototype.setEndorsed = function(endorsed) {
    this.endorsed = endorsed;
}

Client.prototype.getEmployee = function() {
    return this.employee;
}

Client.prototype.setEmployee = function(employee) {
    this.employee = employee;
}

Client.prototype.getBooking = function() {
    return this.booking;
}

Client.prototype.setBooking = function(booking) {
    for (let i = 0, len = booking.length; i < len; ++i) {
        this.booking.add(new Booking(booking[i]));
    }
}

Client.prototype.getStatus = function() {
    return this.status;
}

Client.prototype.setStatus = function(status) {
    return this.status = status;
}

Client.prototype.equals = function(client) {
    return Person.prototype.equals.call(this, client);
}

Client.prototype.toString = function() {
    return Person.prototype.toString.call(this) + ", Id Employee: " + this.id + ", address: " + this.address + ", phone: " + this.phone;
}