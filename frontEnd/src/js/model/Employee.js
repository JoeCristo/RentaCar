function Employee(employee) {
    try {
        Person.call(this, employee);
    } catch (e) {
        throw e;
    }
    this.setIdEmployee(employee.idEmployee || -1);
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.getIdEmployee = function() {
    return this.idEmployee;
}

Employee.prototype.setIdEmployee = function(idEmployee) {
    this.idEmployee = idEmployee;
}

Employee.prototype.equals = function(client) {
    return Person.prototype.equals.call(this, client);
}

Employee.prototype.toString = function() {
    return Person.prototype.toString.call(this) + ", id: " + this.idEmployee;
}