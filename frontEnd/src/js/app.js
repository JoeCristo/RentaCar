(function() {

    let parsedJSON = httpService.init();
    personService.init(parsedJSON);
    garageService.init(parsedJSON);
    spa.init();

}());