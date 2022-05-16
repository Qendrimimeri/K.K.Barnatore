$(document).ready(function () {
    setInterval(updateData, 2000);

  let id = [];

  $.get("http://localhost:3000/users", function (data, status) {
    for (let i = 0; i < data.length; i++) {
      id.push(data[i].id);
    }
  });

  function updateData() {
    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
      let temperaturGenereted = randomInteger(-5, 10);
      let lageshtiaGenereted = randomInteger(30, 60);
      let ndriqimiGenereted = randomInteger(300, 600);
    
      $.ajax({
        url: `http://localhost:3000/users/1`,
        type: "PATCH",
        data: {
          temperatura: temperaturGenereted,
          lageshtia: lageshtiaGenereted,
          ndriqimi: ndriqimiGenereted,
        },
      });
  }
});
