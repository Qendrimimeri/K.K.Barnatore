$(document).ready(function () {
    $("#login").click(function(){
        let loginInput = $("input");
        let number = "";
        let email = "";
        let password = loginInput[1].value;

        if (loginInput[0].value.startsWith("+")) {
            number = loginInput[0].value;
        } else {
            email = loginInput[0].value;
        }

        $.get("http://localhost:3000/users", function(data, status){
            let emailsDB = [];
            let passwordsDB = [];
            let nrTelefonitDB = [];
            for (let i = 0; i < data.length; i++) {
                emailsDB.push(data[i].email);
                passwordsDB.push(data[i].password);
                nrTelefonitDB.push(data[i].nrTelefonit)
            }

            if ((emailsDB.includes(email) || nrTelefonitDB.includes(number)) && passwordsDB.includes(password)) {
                location.href = "../admin/monitoring.html";
            } else {
                alert("You are out")
            }
        });
    });
});
