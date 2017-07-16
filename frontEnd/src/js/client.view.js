window.view = (function(context) {

    let inputDni = context.getElementById("inputDni");
    let inputName = context.getElementById("inputName");
    let inputAddress = context.getElementById("inputAddress");
    let inputPhone = context.getElementById("inputPhone");
    let inputEndorsed = context.getElementById("inputEndorsed");
    let divClientList = context.getElementById("divClientList");
    let btnSaveClient = context.getElementById("btnSaveClient");
    let btnUpdateClient = context.getElementById("btnUpdateClient");
    let btnClean = context.getElementById("btnClean");
    let inputSelect = context.getElementById("inputEndorsed");
    let showMessageSpan = context.getElementById("showMessage");
    let listClient = [];
    let currentValueSelect = '';
    let controller = '';

    let init = function(controller) {
        this.controller = controller;
        btnSaveClient.addEventListener("click", controller.addClient);
        btnUpdateClient.addEventListener("click", controller.updateClient);
        inputSelect.addEventListener("change", controller.getSelectValue);
        btnClean.addEventListener("click", cleanImputs);
    }

    let showListClients = function(clients) {
        divClientList.innerHTML = '';
        let aClients = Array.from(clients);
        aClients.forEach(client => {
            divClientList.innerHTML += "<div class ='p-clients col-21' id='" +
                client.dniPerson + "'><span class='col-6'>" +
                client.namePerson + "</span><span class='status col-4 col-offset-14'>" +
                client.status + "</span></div>";
        });
        listClient = context.getElementsByClassName("p-clients");
        addEventListClient();
    }

    let addEventListClient = function() {
        for (let i = 0, len = listClient.length; i < len; ++i) {
            listClient[i].addEventListener("dblclick", this.controller.showDataClient);
        }
    }

    let fillSelectEndorsed = function(clients) {
        inputSelect.innerHTML = '';
        clients.forEach(client => {
            inputSelect.innerHTML += '<option value="' + client.namePerson + '">' +
                client.namePerson + '</option>';
        });
    }

    let getDataClient = function() {
        let client = {};
        if (inputName.value != '' && inputAddress.value != '' &&
            inputPhone.value != '') {
            client = {
                dniPerson: inputDni.value,
                namePerson: inputName.value,
                address: inputAddress.value,
                phone: inputPhone.value,
                endorsed: { namePerson: inputSelect.value }
            }
            return client;
        } else {
            showMessageIncorrect(FILL_FIELDS);
            return false;
        }
    }

    let showDataClient = function(client) {
        cleanMessage();
        inputAddress.value = client.address;
        inputDni.value = client.dniPerson;
        inputName.value = client.namePerson;
        inputPhone.value = client.phone;
        inputSelect.value = client.endorsed.namePerson;
    }

    let setCurrentValueSelect = function() {
        currentValueSelect = inputSelect.value;
    }

    let cleanMessage = function() {
        showMessageSpan.innerHTML = '';
    }

    let showMessageIncorrect = function(message) {
        showMessageSpan.style.color = COLOR_WARRNIG;
        showMessageSpan.innerHTML = message;
    }

    let showMessageCorrect = function(message) {
        showMessageSpan.style.color = COLOR_PRIMARY;
        showMessageSpan.innerHTML = message;
        cleanImputs();
    }

    let cleanImputs = function() {
        inputAddress.value = '';
        inputDni.value = '';
        inputName.value = '';
        inputPhone.value = '';
    }
    return {
        init,
        showListClients,
        fillSelectEndorsed,
        getDataClient,
        setCurrentValueSelect,
        showMessageIncorrect,
        showMessageCorrect,
        showDataClient
    }

})(window.document);