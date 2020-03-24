function oeeplta1(){
    var oee =[];
    var dataoee1 =[];
    var dataoee2 =[];
    var dataoee3 =[];
    document.getElementById("unit").innerHTML = "OEE PLTA Ir. PM. Noor Unit 1";
      $.getJSON("https://spreadsheets.google.com/feeds/cells/1e_ciU46tZ_sT3vsDvvEoEzoDxkIJOaXHUsgKuKMv2bU/3/public/basic?alt=json" ,function (data){
        var gan = data.feed.entry;
        for (var i = 0; i<gan.length; i++) {
              oee.push(gan[i].content.$t); 
        }
        for(var j = 0; j<11; j++){
            dataoee1.push(oee[j]);
        }
        for(var j = 25; j<39; j++){
            dataoee2.push(oee[j]);
        }
        for(var j = 39; j<50; j++){
            dataoee3.push(oee[j]);
        }
        oeen = dataoee2.map(Number);
        oeen[11] = (oeen[11]*100).toFixed(2);
        oeen[12] = (oeen[12]*100).toFixed(2);
        oeen[13] = (oeen[13]*100).toFixed(2);
        oeen[10] = (oeen[10]).toFixed(2);
        var avail = document.getElementById("output1");
        avail.innerHTML = oeen[11];
        var perf = document.getElementById("output2");
        perf.innerHTML = oeen[12];
        var oeee = document.getElementById("output3");
        oeee.innerHTML = oeen[13];
        var net = document.getElementById("net");
        net.innerHTML = oeen[10];
        var ctx = document.getElementById('jamChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dataoee1,
                datasets: [{
                    label: 'data2',
                    data: dataoee2,
                    backgroundColor: [
                        'rgba(54, 162, 235)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(54, 162, 235)',
                    ]
                },{
                    label: 'data3',
                    data: dataoee3,
                    backgroundColor: [
                        'rgba(54, 162, 235)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                    ]
                }]
            },
            options: {
                legend: {
                  display: false
                },
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        stacked: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'MWh'
                        }
                    }]
                }
            }
        });
      })
    }
function oeeplta2(){
    var oee =[];
    var dataoee1 =[];
    var dataoee2 =[];
    var dataoee3 =[];
    document.getElementById("unit").innerHTML = "OEE PLTA Ir. PM. Noor Unit 2";
      $.getJSON("https://spreadsheets.google.com/feeds/cells/1uOgTEWkmpxhXzsTd7yznLE-eodGnJVmX6Y0tiJGFxIU/3/public/basic?alt=json" ,function (data){
        var gan = data.feed.entry;
        for (var i = 0; i<gan.length; i++) {
              oee.push(gan[i].content.$t); 
        }
        for(var j = 0; j<11; j++){
            dataoee1.push(oee[j]);
        }
        for(var j = 25; j<39; j++){
            dataoee2.push(oee[j]);
        }
        for(var j = 39; j<50; j++){
            dataoee3.push(oee[j]);
        }
        oeen = dataoee2.map(Number);
        oeen[11] = (oeen[11]*100).toFixed(2);
        oeen[12] = (oeen[12]*100).toFixed(2);
        oeen[13] = (oeen[13]*100).toFixed(2);
        oeen[10] = (oeen[10]).toFixed(2);
        var avail = document.getElementById("output1");
        avail.innerHTML = oeen[11];
        var perf = document.getElementById("output2");
        perf.innerHTML = oeen[12];
        var oeee = document.getElementById("output3");
        oeee.innerHTML = oeen[13];
        var net = document.getElementById("net");
        net.innerHTML = oeen[10];
        var ctx = document.getElementById('jamChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dataoee1,
                datasets: [{
                    label: 'data2',
                    data: dataoee2,
                    backgroundColor: [
                        'rgba(54, 162, 235)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(54, 162, 235)',
                    ]
                },{
                    label: 'data3',
                    data: dataoee3,
                    backgroundColor: [
                        'rgba(54, 162, 235)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                    ]
                }]
            },
            options: {
                legend: {
                  display: false
                },
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        stacked: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'MWh'
                        }
                    }]
                }
            }
        });
      })
    }
function oeeplta3(){
    var oee =[];
    var dataoee1 =[];
    var dataoee2 =[];
    var dataoee3 =[];
    document.getElementById("unit").innerHTML = "OEE PLTA Ir. PM. Noor Unit 3";
      $.getJSON("https://spreadsheets.google.com/feeds/cells/1ZgMf7p7TIF_gXHzm3kY9VE9h0dn9egFZQo6LRQpXfls/3/public/basic?alt=json" ,function (data){
        var gan = data.feed.entry;
        for (var i = 0; i<gan.length; i++) {
              oee.push(gan[i].content.$t); 
        }
        for(var j = 0; j<11; j++){
            dataoee1.push(oee[j]);
        }
        for(var j = 25; j<39; j++){
            dataoee2.push(oee[j]);
        }
        for(var j = 39; j<50; j++){
            dataoee3.push(oee[j]);
        }
        oeen = dataoee2.map(Number);
        oeen[11] = (oeen[11]*100).toFixed(2);
        oeen[12] = (oeen[12]*100).toFixed(2);
        oeen[13] = (oeen[13]*100).toFixed(2);
        oeen[10] = (oeen[10]).toFixed(2);
        var avail = document.getElementById("output1");
        avail.innerHTML = oeen[11];
        var perf = document.getElementById("output2");
        perf.innerHTML = oeen[12];
        var oeee = document.getElementById("output3");
        oeee.innerHTML = oeen[13];
        var net = document.getElementById("net");
        net.innerHTML = oeen[10];
        var ctx = document.getElementById('jamChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dataoee1,
                datasets: [{
                    label: 'data2',
                    data: dataoee2,
                    backgroundColor: [
                        'rgba(54, 162, 235)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(54, 162, 235)',
                        'rgba(255, 255, 255, 0)',
                        'rgba(54, 162, 235)',
                    ]
                },{
                    label: 'data3',
                    data: dataoee3,
                    backgroundColor: [
                        'rgba(54, 162, 235)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                        'rgba(255, 99, 132)',
                    ]
                }]
            },
            options: {
                legend: {
                  display: false
                },
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        stacked: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'MWh'
                        }
                    }]
                }
            }
        });
      })
    }
