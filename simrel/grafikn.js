//bar chart
function dayakp(){
  var datadaya =[];
  var label =[];
  var daya = [];
  var lokasi = [];
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1F7RRznWwy3XNz_5-M0xnlGNuILZf_zjmFmeHAR5lk9U/5/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          datadaya.push(gan[i].content.$t); 
      } 
    for(var j = 12; j<84; j++){
      if(datadaya[j]!==""){
        if(j%12==2){
              label.push(datadaya[j]);
          }
        if((j-1)%12==0){
              lokasi.push(datadaya[j]);
          }
        if((j-4)%12==0){
              daya.push(datadaya[j]);
        }
      }
    }
    var labelin = document.getElementById('mdtertinggi');
    labelin.innerHTML=label[0];
    var lokasiin = document.getElementById('ldtertinggi');
    lokasiin.innerHTML=lokasi[0];
    var dayaiin = document.getElementById('dtertinggi');
    dayaiin.innerHTML=daya[0] + " kW";
    var dayain = daya.map(Number);
    //Bar chart
    var ctx = document.getElementById('daya').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: label,
              datasets: [{
                  label: 'Daya Mampu',
                  data: dayain,
                  backgroundColor:
                      'rgba(255, 99, 132, 1)',
                  borderColor:
                      'rgba(255, 99, 132, 1)',
                  borderWidth: 1
              }]
          },
          options: {
              legend: {
                  display: false
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true,
                          stepSize: 200
                      }
                  }]
              }
          }
      });

  })
}
function sfckp(){
  var yoman =[];
  var label =[];
  var sfc = [];
  var lokasi =[];
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1F7RRznWwy3XNz_5-M0xnlGNuILZf_zjmFmeHAR5lk9U/6/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = 6; j<42; j++){
      if(yoman[j]!==""){
        if(j%6==2){
              label.push(yoman[j]);
          }
        if((j-1)%14==0){
              lokasi.push(yoman[j]);
          }
        if((j-5)%6==0){
              sfc.push(yoman[j]);
        }
      }
    }
    var labelin = document.getElementById('mstertinggi');
    labelin.innerHTML=label[0];
    var lokasiin = document.getElementById('lstertinggi');
    lokasiin.innerHTML=lokasi[0];
    var sfciin = document.getElementById('stertinggi');
    sfciin.innerHTML=sfc[0] + " Liter/kWh";
    var sfcin = sfc.map(Number);
    //Bar chart
    var ctx = document.getElementById('sfc').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: label,
              datasets: [{
                  label: 'SFC',
                  data: sfcin,
                  backgroundColor:
                      'rgba(255, 206, 86, 1)',
                  borderColor:
                      'rgba(255, 206, 86, 1)',
                  borderWidth: 1
              }]
          },
          options: {
              legend: {
                  display: false
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true,
                        
                      }
                  }]
              }
          }
      });

  })
}
function hargakp(){
  var yoman =[];
  var label =[];
  var harga = [];
  var lokasi =[];
  var hargaf =[];
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1F7RRznWwy3XNz_5-M0xnlGNuILZf_zjmFmeHAR5lk9U/7/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = 14; j<98; j++){
      if(yoman[j]!==""){
        if(j%14==2){
              label.push(yoman[j]);
          }
        if((j-1)%14==0){
              lokasi.push(yoman[j]);
          }
        if((j-12)%14==0){
              harga.push(yoman[j]);
        }
      }
    }
    hargaf=harga.map(Number);
    var labelin = document.getElementById('mbterendah');
    labelin.innerHTML=label[0];
    var lokasiin = document.getElementById('lbterendah');
    lokasiin.innerHTML=lokasi[0];
    var hargaiin = document.getElementById('bterendah');
    hargaiin.innerHTML= "Rp "+ hargaf[0].toLocaleString();
    var hargain = harga.map(Number);
    //Bar chart
    var ctx = document.getElementById('harga').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: label,
              datasets: [{
                  label: 'Biaya Relokasi',
                  data: hargain,
                  backgroundColor:
                      'rgba(153, 102, 255, 1)',
                  borderColor:
                      'rgba(153, 102, 255, 1)',
                  borderWidth: 1
              }]
          },
          options: {
              legend: {
                  display: false
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true,
                        
                      }
                  }]
              }
          }
      });

  })
}
function bepkp(){
  var yoman =[];
  var label =[];
  var bep = [];
  var lokasi =[];
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1F7RRznWwy3XNz_5-M0xnlGNuILZf_zjmFmeHAR5lk9U/7/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = 14; j<98; j++){
      if(yoman[j]!==""){
        if(j%14==2){
              label.push(yoman[j]);
          }
        if((j-1)%14==0){
              lokasi.push(yoman[j]);
          }
        if((j-13)%14==0){
              bep.push(yoman[j]);
        }
      }
    }
    var labelin = document.getElementById('mbpterendah');
    labelin.innerHTML=label[0];
    var lokasiin = document.getElementById('lbpterendah');
    lokasiin.innerHTML=lokasi[0];
    var bepiin = document.getElementById('bpterendah');
    bepiin.innerHTML=bep[0] + " Tahun";
    var bepin = bep.map(Number);
    //Bar chart
    var ctx = document.getElementById('bep').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: label,
              datasets: [{
                  label: 'Break Event Point',
                  data: bepin,
                  backgroundColor:
                      'rgba(255, 159, 64, 1)',
                  borderColor:
                      'rgba(255, 159, 64, 1)',
                  borderWidth: 1
              }]
          },
          options: {
              legend: {
                  display: false
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true,
                        
                      }
                  }]
              }
          }
      });

  })
}