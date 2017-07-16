const ajax = function (user) {
    return new Promise((resolve, reject) => {
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    resolve(user.parse ? JSON.parse(xmlhttp.responseText) : xmlhttp.responseText);
                } else {
                    reject(xmlhttp.status, xmlhttp.statusText);
                }
            }
        };
        let sent = null;
        if (user.data) {
            let p = [];
            for (let f in user.data) p.push(f + "=" + user.data[f]);
            user.type === 'GET' ? user.url += "?" + p.join('&') : sent = p.join('&');
        }
        xmlhttp.open(user.type, user.url, user.async === undefined || user.async);
        if (sent) xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(sent);
    }
    )
};