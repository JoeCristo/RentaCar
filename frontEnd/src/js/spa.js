let spa = (function() {
    'use strict';
    let script = '';
    let url;
    let cache = {};
    let newPath = '';
    let contentDIV = window.document.getElementById('content');
    let routes = [
        '#home',
        '#client',
        '#booking',
        '#car'
    ];
    window.addEventListener('hashchange', function(e) {
        render(url, e);
    });

    function init() {
        window.onload = function(e) {
            url = new URL();
            if ((url.hashArray.length > 1 && url.hash !== '#home') || url.hash === '') {
                window.history.pushState(null, '', url.origin + '/#home');
                triggerHashChange(window);
                url = '';
            } else {
                triggerHashChange(window);
            }
        };
    }

    document.body.addEventListener('click', function(e) {
        let tag = e.target;
        if (tag.tagName === 'A' && tag.href && e.button === 0) {
            if (tag.origin === window.location.origin) {
                e.preventDefault();
                newPath = tag.href;
                window.history.pushState('null', '', newPath);
                url = new URL();
                render(url, e);
                url = '';
            }
        }
    });

    function render(url, evt) {
        let hash = url.hash;
        let router = {};
        routes.forEach(function(map) {
            router[map] = function() {
                renderPage(map);
            };
        });
        router[''] = function() {
            renderPage('#/home');
        };
        if (router[hash]) {
            router[hash]();
        } else {
            renderErrorPage();
        }
    }

    function renderPage(page) {
        let dest = page.substring(1);
        getPage(dest);
    }

    function getPage(page) {
        let path = '../templates/' + page + '.html';
        let pathView = './' + page + '.view.js';
        let pathController = './' + page + '.controller.js'
        if (!cache.hasOwnProperty(page)) {
            Promise.all([
                    ajax({
                        url: path,
                        type: 'GET',
                        parse: false,
                        async: true
                    }),
                    ajax({
                        url: pathView,
                        type: 'GET',
                        parse: false,
                        async: true
                    }),
                    ajax({
                        url: pathController,
                        type: 'GET',
                        parse: false,
                        async: true
                    })
                ])
                .then(([html, viewScript, controllerScript]) => {
                    updateContent(html, viewScript, controllerScript);
                    cache[page] = {
                        html,
                        viewScript,
                        controllerScript,
                    };
                })
                .catch(e => {
                    updateContent(html, viewScript, controllerScript);
                });

        } else {
            updateContent(cache[page].html, cache[page].viewScript, cache[page].controllerScript);
        }
    }


    function setNavLinkActive() {
        let hash = window.location.hash;
        let links = window.document.getElementsByClassName('links');
        let parents = window.document.getElementsByClassName('nav-parents');
        let currentLinkActive;
        [].forEach.call(parents, function(item) {
            if (item.classList.contains('active'))
                item.classList.remove('active');
        });
        for (let i = 0; i < links.length; i++) {
            if (links[i].getAttribute('href') === hash)
                currentLinkActive = links[i];
        }
        currentLinkActive.parentElement.classList.add('active');
    }

    function updateContent(content, viewText, controllerText) {

        if (content != void 0) {

            contentDIV.innerHTML = content;
            const s = window.document.getElementsByTagName("body")[0];

            const fistScript = window.document.getElementById("viewScript");
            const secondScript = window.document.getElementById("controllerScript");
            if (fistScript)
                s.removeChild(fistScript);
            if (secondScript)
                s.removeChild(secondScript)

            const firstChild = s.firstChild;
            const viewScriptNode = window.document.createElement("script");
            viewScriptNode.setAttribute("type", "text/javascript");
            viewScriptNode.setAttribute("id", "viewScript");
            viewScriptNode.text = viewText;
            s.insertBefore(viewScriptNode, firstChild);

            const controllerScriptNode = window.document.createElement("script");
            controllerScriptNode.setAttribute("type", "text/javascript");
            controllerScriptNode.setAttribute("id", "controllerScript");
            controllerScriptNode.text = controllerText;
            s.insertBefore(controllerScriptNode, firstChild);

            controller.init(view, httpService, personService, garageService);

            setNavLinkActive();
        } else {
            renderErrorPage();
        }
    }

    function renderErrorPage() {
        console.log('Error');
    }

    function URL() {
        this.location = window.location;
        this.origin = this.location.origin;
        this.href = this.location.href;
        this.fullHash = this.location.hash;
        this.hashArray = this.location.hash.split('/');
        this.hash = this.hashArray[0];
    }

    function triggerHashChange(el) {
        let event = document.createEvent('HTMLEvents');
        event.initEvent('hashchange', true, false);
        el.dispatchEvent(event);
    }

    return {
        init: init
    };

}());