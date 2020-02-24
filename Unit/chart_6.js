//paretto chart

//bar chart
var yoman =[];
var label =[];
var gangguan  = [];
var presentase = [];
var kontribusi = [];
var kons = [];

//get data from google sheets
$.getJSON("https://spreadsheets.google.com/feeds/cells/1cLWOVjH593O6Eg4qRbo0pVJS5UamQYuFg0UcYlkutY8/3/public/basic?alt=json" ,function (data){
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
                        beginAtZero: true
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
$.getJSON("https://spreadsheets.google.com/feeds/cells/1cLWOVjH593O6Eg4qRbo0pVJS5UamQYuFg0UcYlkutY8/4/public/basic?alt=json" ,function (data){
  var gan = data.feed.entry;
  for (var i = 0; i<gan.length; i++) {
        donat.push(gan[i].content.$t); 
    } 
  for(var j = 5; j<donat.length; j++){
    if(donat[j]!==""){
      if(j%5==0){
            label2.push(donat[j]);
        }
      
      if((j-4)%5==0){
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
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
                  data: persen
                }
              ]
            },
            options: {
              title: {
                display: true,
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
$.getJSON("https://spreadsheets.google.com/feeds/cells/1cLWOVjH593O6Eg4qRbo0pVJS5UamQYuFg0UcYlkutY8/6/public/basic?alt=json" ,function (data){
  var gan = data.feed.entry;
  for (var i = 0; i<gan.length; i++) {
        bar2.push(gan[i].content.$t); 
    } 
  for(var j = 4; j<bar2.length; j++){
    if(bar2[j]!==""){
      if(j%4==0){
            label3.push(bar2[j]);
        }
      
      if((j-3)%4==0){
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

  var mwh = total*5;
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





