$(document).ready(function () {
    $.get("http://localhost:3000/users", function (data, status) {
        let emriKompanis = [];
        let regjioni = [];
        let nrTelefonit = [];
        let email = [];
        let password = [];
        let id = [];

        let tableSelected = $('table tbody');
        for (let i = 0; i < data.length; i++) {
            emriKompanis.push(data[i].emriKompanis);
            regjioni.push(data[i].regjioni);
            nrTelefonit.push(data[i].nrTelefonit);
            email.push(data[i].email);
            password.push(data[i].password);
            id.push(data[i].id);      
            
            tableSelected.append(`<tr id="${id[i]}">
                                    <td>${id[i]}</td>
                                    <td>${emriKompanis[i]}</td>
                                    <td>${regjioni[i]}</td>
                                    <td>${nrTelefonit[i]}</td>
                                    <td>${email[i]}</td>
                                    <td>${password[i]}</td>
                                </tr>`)
        }
    })
});