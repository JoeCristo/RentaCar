function Booking(booking) {
    this.setIdBooking(booking.idBooking);
    this.setDate(booking.date);
    this.bookingDetail = new Set();
    this.setBookingDetail(booking.bookingDetail);
}

Booking.prototype.getIdBooking = function() {
    return this.idBooking;
}

Booking.prototype.setIdBooking = function(idBooking) {
    this.idBooking = idBooking;
}

Booking.prototype.getDate = function() {
    return this.date;
}

Booking.prototype.setDate = function(date) {
    this.date = date;
}

Booking.prototype.getBookingDetail = function() {
    return this.bookingDetail;
}

Booking.prototype.setBookingDetail = function(bookingDetail) {
    for (let i = 0, len = bookingDetail.length; i < len; ++i) {
        this.bookingDetail.add(new BookingDetail(bookingDetail[i]));
    }
}

Booking.prototype.equals = function(booking) {
    return this.idBooking == booking.idBooking;
}