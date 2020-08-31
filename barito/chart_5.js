  //paretto chart
function pareto_5(){
//bar chart
  var yoman =[];
  var label =[];
  var gangguan  = [];
  var presentase = [];
  var kontribusi = [];
  var kons = [];

  var title = document.getElementById("title");
  title.innerHTML= "SWD 16 TM Mesin 5";
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1VIjn_SHSVQHRJW-pce3_X1ZfIfsQ1mo9SQrJMyOdatU/3/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = 5; j<yoman.length; j++){
      if(yoman[j]!==""){
        if(j%5==0){
              label.push(yoman[j]);
          }
        if((j-1)%5==0){
              gangguan.push(yoman[j]);
        }
        if((j-2)%5==0){
              presentase.push(yoman[j]);
        }
        if((j-3)%5==0){
              kontribusi.push(yoman[j]);
        }
        if((j-4)%5==0){
              kons.push(yoman[j]);
        }
      }
    }
    label.reverse();
    gangguan.reverse();
    presentase.reverse();
    kontribusi.reverse();
    kons.reverse();

    //Bar chart
    var ctx = document.getElementById('bc_6').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: label,
              datasets: [{
                  label: 'Jumlah Gangguan',
                  data: gangguan,
                  backgroundColor:
                      
                      'rgba(54, 162, 235, 1)',
                      
                  borderColor:
                      
                      'rgba(54, 162, 235, 1)',
                      
                  yAxisID:'y-axis-1',
                  borderWidth: 1
                  
                  
              //},{
                  //label: 'Kontribusi',
                  //data: kons, 
                  //backgroundColor: [
                      //'rgba(0, 0, 0, 0)',
                  //],
                  //borderColor:
                      
                      //'rgba(255, 0, 153, 1)',
                      
                  //type:'line',
                  //yAxisID:'y-axis-2'
              }]
          },
          options: {
              legend: {
                  display: false
              },
              scales: {
                  yAxes: [{
                      position:'left',
                      id:'y-axis-1',
                      ticks: {
                          beginAtZero: true,
                          stepSize: 1
                      }
                  //},{
                      //position:'right',
                      //id:'y-axis-2',
                      //ticks: {
                          //max:100,
                          //beginAtZero: true

                      //}
                  }]
              }
          }
      });

  })
  //Doughnut chart
  var donat =[];
  var label2 =[];
  var persen = [];

  //get data from google sheet
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1VIjn_SHSVQHRJW-pce3_X1ZfIfsQ1mo9SQrJMyOdatU/4/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          donat.push(gan[i].content.$t); 
      } 
    for(var j = 6; j<donat.length; j++){
      if(donat[j]!==""){
        if(j%6==0){
              label2.push(donat[j]);
          }
        
        if((j-5)%6==0){
              persen.push(donat[j]);
        }
      }
    }
    //Doughnut chart
    new Chart(document.getElementById("dc_6"), {
              type: 'doughnut',
              data: {
                labels: label2,
                datasets: [
                  {
                    label: "Population (millions)",
                    backgroundColor: ["#D7269C", "#109DC0","#F5A345","#e8c3b9",'rgba(255, 99, 132)',
                          'rgba(54, 162, 235)',
                          'rgba(255, 206, 86)',
                          'rgba(75, 192, 192)',
                          'rgba(153, 102, 255)',
                          'rgba(255, 159, 64)'],
                    data: persen
                  }
                ]
              },
              options: {
                legend: {
                  labels: {
                      fontColor: "white",
                  }
                },
                title: {
                  display: false,
                  text: '80% Kontribusi Gangguan'
                }
              }
          });
    })

  //bar chart time
  var bar2 =[];
  var label3 =[];
  var time = [];
  var inter =[];
  var total = 0;

  //get data from google sheet
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1VIjn_SHSVQHRJW-pce3_X1ZfIfsQ1mo9SQrJMyOdatU/6/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          bar2.push(gan[i].content.$t); 
      } 
    for(var j = 6; j<bar2.length; j++){
      if(bar2[j]!==""){
        if(j%6==0){
              label3.push(bar2[j]);
          }
        
        if((j-3)%6==0){
              time.push(bar2[j]);
        }
      }
    }
    label3.reverse();
    time.reverse();
    inter = time.map(Number);
    for (var k = 0; k<inter.length; k++){
      total += inter[k];
    }
    total=total.toFixed(2);
    var hasil = document.getElementById("output");
    hasil.innerHTML = total;

    var mwh = total*3.3;
    mwh= mwh.toFixed(2);
    var mwhh = document.getElementById("power");
    mwhh.innerHTML = mwh;
    //Bar chart time
    var ctx = document.getElementById('tc_6').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: label3,
              datasets: [{
                  label: 'Jam Gangguan',
                  data: time,
                  backgroundColor:

                      'rgba(255, 99, 132, 1)',
                                          
                  borderColor:
                      
                      'rgba(255, 99, 132, 1)',
                      
                  yAxisID:'y-axis-1',
                  borderWidth: 1
          
              }]
          },
          options: {
              legend: {
                  display: false
              },
              scales: {
                  yAxes: [{
                      position:'left',
                      id:'y-axis-1',
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });

  })

  //Doughnut chart
  var donat2 =[];
  var label4 =[];
  var persen2 = [];

  //get data from google sheet
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1VIjn_SHSVQHRJW-pce3_X1ZfIfsQ1mo9SQrJMyOdatU/7/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          donat2.push(gan[i].content.$t); 
      } 
    for(var j = 7; j<donat2.length; j++){
      if(donat2[j]!==""){
        if(j%7==0){
              label4.push(donat2[j]);
          }
        
        if((j-6)%7==0){
              persen2.push(donat2[j]);
        }
      }
    }
    //Doughnut chart
    new Chart(document.getElementById("dcm_6"), {
              type: 'doughnut',
              data: {
                labels: label4,
                datasets: [
                  {
                    label: "Population (millions)",
                    backgroundColor: ["#D7269C", "#109DC0","#F5A345","#e8c3b9",'rgba(255, 99, 132)',
                          'rgba(54, 162, 235)',
                          'rgba(255, 206, 86)',
                          'rgba(75, 192, 192)',
                          'rgba(153, 102, 255)',
                          'rgba(255, 159, 64)'],
                    data: persen2
                  }
                ]
              },
              options: {
                legend: {
                  labels: {
                      fontColor: "white",
                  }
                },
                title: {
                  display: false,
                  text: '80% Kontribusi Gangguan'
                }
              }
          });
      })
  var download = document.getElementById("download");
  download.innerHTML = '<a class="btn btn-info mt-2" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTW1A_wMZSVTFvP1JssphO82vY8HdZhYjI-OU2iqr2vRJrWjfIfkYcxcowZ24BfQyMZ884s4okgb3b0/pub?gid=1921317437&single=true&output=csv" role="button">Download Data</a>';
}
  








