$(document).ready(function () {
  let regjionet = [];
  let temperatura = [];
  let lageshtia = [];
  let ndriqimi = [];
  
  $.get("http://localhost:3000/users", function(data, status) {
    for (let i = 0; i < data.length; i++) {
      regjionet.push(data[i].regjioni)  
      temperatura.push(data[i].temperatura)    
      lageshtia.push(data[i].lageshtia)  
      ndriqimi.push(data[i].ndriqimi)                              
    }

  });
  const labels = regjionet;

  // --- Temperature Start --- 
  const tempData = {
    labels: labels,
    datasets: [{
      label: 'Temperatura',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: temperatura,
    }]
  };
  const configTemp = {
    type: 'bar',
    data: tempData,
    options: {}
  };
  const temperatureChart = new Chart(
    document.getElementById('temperature'),
    configTemp
  );

  //   --- Temperature End ---

  //   --- Humidity Start ---

  const lagData = {
    labels: labels,
    datasets: [{
      label: 'Lageshtia',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: lageshtia,
    }]
  };
  const configLag = {
    type: 'bar',
    data: lagData,
    options: {}
  };
  const lageshtiaChart = new Chart(
    document.getElementById('lageshtia'),
    configLag
  );

  //   --- Humidity End ---

  //   --- Ndimi Start ---

  const ndrData = {
    labels: labels,
    datasets: [{
      label: 'Ndriqimi',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: lageshtia,
    }]
  };
  const configNdr = {
    type: 'bar',
    data: ndrData,
    options: {}
  };
  const ndriqimiChart = new Chart(
    document.getElementById('ndriqimi'),
    configNdr
  );

  //   --- Ndimi End ---



});


