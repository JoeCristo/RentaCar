function RentaCarERROR(message) {
    this.name = 'RentaCarERROR';
    this.message = message || 'Default Message';
}
RentaCarERROR.prototype = Object.create(Error.prototype);
RentaCarERROR.prototype.constructor = RentaCarERROR;