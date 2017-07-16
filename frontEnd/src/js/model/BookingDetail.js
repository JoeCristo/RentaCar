function BookingDetail(bookingDetail) {
    this.setIdBookingDetail(bookingDetail.idBookingDetail);
    this.setDateStart(bookingDetail.dateStart);
    this.setDateEnd(bookingDetail.dateEnd);
    this.setNumberPlate(bookingDetail.numberPlate);
    this.setGasoline(bookingDetail.gasoline);
    this.setStatus(bookingDetail.status);
    this.setTotalPrice(bookingDetail.totalPrice);
}

BookingDetail.prototype.getIdBookingDetail = function() {
    return this.idBookingDetail;
}

BookingDetail.prototype.setIdBookingDetail = function(idBookingDetail) {
    this.idBookingDetail = idBookingDetail;
}

BookingDetail.prototype.getDateStart = function() {
    return this.dateStart;
}

BookingDetail.prototype.setDateStart = function(dateStart) {
    this.dateStart = dateStart;
}

BookingDetail.prototype.getDateEnd = function() {
    return this.dateEnd;
}

BookingDetail.prototype.setDateEnd = function(dateEnd) {
    this.dateEnd = dateEnd;
}

BookingDetail.prototype.getNumberPlate = function() {
    return this.numberPlate;
}

BookingDetail.prototype.setNumberPlate = function(numberPlate) {
    this.numberPlate = numberPlate;
}

BookingDetail.prototype.getGasoline = function() {
    return this.gasoline;
}

BookingDetail.prototype.setGasoline = function(gasoline) {
    this.gasoline = gasoline;
}

BookingDetail.prototype.getStatus = function() {
    return this.status;
}

BookingDetail.prototype.setStatus = function(status) {
    this.status = status;
}

BookingDetail.prototype.getTotalPrice = function() {
    return this.totalPrice;
}

BookingDetail.prototype.setTotalPrice = function(totalPrice) {
    this.totalPrice = totalPrice;
}

BookingDetail.prototype.equals = function(bookingDetail) {
    return this.numberPlate == bookingDetail.numberPlate &&
        this.dateStart == bookingDetail.dateStart &&
        this.dateEnd == bookingDetail.dateEnd;
}