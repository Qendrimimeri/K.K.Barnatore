// (function () {
// 	'use strict'

// 	// Fetch all the forms we want to apply custom Bootstrap validation styles to
// 	var forms = document.querySelectorAll('.needs-validation')

// 	// Loop over them and prevent submission
// 	Array.prototype.slice.call(forms)
// 		.forEach(function (form) {
// 			form.addEventListener('submit', function (event) {
// 				if (!form.checkValidity()) {
// 					event.preventDefault()
// 					event.stopPropagation()
// 				}

// 				form.classList.add('was-validated')
// 			}, false)
// 		})
// })()

// const accountSid = "ACa63fe0dfc880ef579ad58329af4cb69d";
// const authToken = "43bccbbd72c812af96557e6433a9fe78";

//twilio = require("twilio");
// const client = new twilio(accountSid, authToken);

$(document).ready(function () {
  $("#regjistrohu").click(function () {
    let inputs = $(".regj-inp");

    let emriKompanis = inputs[0].value;
    let regjioni = inputs[1].value;
    let nrTelefonit = inputs[2].value;
    let email = inputs[3].value;
    let password = inputs[4].value;

	// const randomNum = Math.floor(1000 + Math.random() * 9000);
    // client.messages
    //   .create({
    //     body: `this is code ${randomNum} do not share with anyone else.`,
    //     to: nrTelefonit, 
    //     from: "+38344395902", 
    //   })
    //   .then((message) => console.log(message.sid));


    $.get("http://localhost:3000/users", function (data, satus) {
      let emails = [];
      let emratEKompanive = [];
      let nrTelefonav = [];
      for (let i = 0; i < data.length; i++) {
        emails.push(data[i].email);
        emratEKompanive.push(data[i].emriKompanis);
        nrTelefonav.push(data[i].nrTelefonit);
      }

      console.log(emails);
      console.log(emriKompanis);
      console.log(nrTelefonit);

      if (
        emails.includes(email) &&
        emratEKompanive.includes(emriKompanis) &&
        nrTelefonav.includes(nrTelefonit)
      ) {
        alert("Biznesi me keto iniciale tashme esht i regjistruar");
      } else {
        $.post("http://localhost:3000/users", {
          emriKompanis: emriKompanis,
          regjioni: regjioni,
          nrTelefonit: nrTelefonit,
          email: email,
          password: password,
          temperatura: 5,
          lageshtia: 96, 
          ndriqimi : 370

        }, function () {
			window.location.href = 'login.html';
		});
		
      }
    });
  });
  function sendMessage (randomDigit, phoneNumber){
	  
  }
});
