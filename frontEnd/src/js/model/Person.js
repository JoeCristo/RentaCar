function Person(person) {
    try {
        this.setDniPerson(person.dniPerson);
        this.setNamePerson(person.namePerson);
    } catch (e) {
        throw e;
    }
}

Person.prototype.getNamePerson = function() {
    return this.namePerson;
}

Person.prototype.setNamePerson = function(namePerson) {
    if (REGEXP_NAME.test(namePerson)) this.namePerson = namePerson
    else throw new RentaCarERROR(INCORRECT_NAME)
}

Person.prototype.getDniPerson = function() {
    return this.dniPerson;
}

Person.prototype.setDniPerson = function(dniPerson) {
    if (REGEXP_DNI.test(dniPerson)) this.dniPerson = dniPerson
    else throw new RentaCarERROR(INCORRECT_DNI)
}

Person.prototype.equals = function(person) {
    return this.dniPerson == person.dniPerson;
}

Person.prototype.toString = function() {
    return ", name : " + this.namePerson + ", dni : " + this.dniPerson;
}