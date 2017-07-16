window.controller = (function() {

    let self;

    let init = function(clientView, httpService, personService, garageService) {
        self = this;
        self._clientView = clientView;
        self._httpService = httpService;
        self._personService = personService;
        self._garageService = garageService;
        initServices();
    }

    let initServices = function() {
        self._clientView.init(self);
        showListClients();
    }

    let addClient = function() {
        let dataClient = self._clientView.getDataClient();
        try {
            if (dataClient != false) {
                if (self._personService.addClient(dataClient)) {
                    self._clientView.showMessageCorrect(ADD_CORRECT);
                    showListClients();
                } else {
                    self._clientView.showMessageIncorrect(PERSON_EXISTS);
                }
            }
        } catch (e) {
            self._clientView.showMessageIncorrect(e.message);
        }
    }

    let showListClients = function() {
        let clients = self._personService.getAllClients();
        commonsFunctionsUpdateAdd(clients);
    }

    let commonsFunctionsUpdateAdd = function(clients) {
        self._clientView.showListClients(clients);
        self._clientView.fillSelectEndorsed(clients);
    }

    let getSelectValue = function() {
        self._clientView.setCurrentValueSelect();
    }

    let showDataClient = function(event) {
        let client = self._personService.getClient(event.target.id);
        self._clientView.showDataClient(client);
    }

    let updateClient = function() {
        try {
            if (self._personService.updateClient(self._clientView.getDataClient())) {
                self._clientView.showMessageCorrect(MODIFIED_CORRECT);
                console.log("hola");
                commonsFunctionsUpdateAdd(self._personService.getAllClients());
            } else {
                self._clientView.showMessageIncorrect(PERSON_NOT_EXISTS);
            }
        } catch (e) {
            self._clientView.showMessageIncorrect(e.message);
        }
    }


    return {
        init,
        showListClients,
        addClient,
        getSelectValue,
        showDataClient,
        updateClient
    };

})();