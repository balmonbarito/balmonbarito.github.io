function oeeplta1_2(){
    var oee =[];
    var dataoee1 =[];
    var dataoee2 =[];
    var dataoee3 =[];
    document.getElementById("bulan").innerHTML = "OEE PLTA Februari 2020";
    document.getElementById("unit_1").innerHTML = "OEE PLTA Ir. PM. Noor Unit 1";
      $.getJSON("https://spreadsheets.google.com/feeds/cells/1e_ciU46tZ_sT3vsDvvEoEzoDxkIJOaXHUsgKuKMv2bU/2/public/basic?alt=json" ,function (data){
        var gan = data.feed.entry;
        for (var i = 0; i<gan.length; i++) {
              oee.push(gan[i].content.$t); 
        }
        for(var j = 0; j<11; j++){
            dataoee1.push(oee[j]);
        }
        for(var j = 50; j<64; j++){
            dataoee2.push(oee[j]);
        }
        for(var j = 64; j<75; j++){
            dataoee3.push(oee[j]);
        }
        oeen = dataoee2.map(Number);
        oeen[11] = (oeen[11]*100).toFixed(2);
        oeen[12] = (oeen[12]*100).toFixed(2);
        oeen[13] = (oeen[13]*100).toFixed(2);
        oeen[10] = (oeen[10]).toFixed(2);
        var avail = document.getElementById("output1_1");
        avail.innerHTML = oeen[11];
        var perf = document.getElementById("output2_1");
        perf.innerHTML = oeen[12];
        var oeee = document.getElementById("output3_1");
        oeee.innerHTML = oeen[13];
        var net = document.getElementById("net_1");
        net.innerHTML = oeen[10];
        var ctx = document.getElementById('jamChart_1').getContext('2d');
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
function oeeplta2_2(){
    var oee =[];
    var dataoee1 =[];
    var dataoee2 =[];
    var dataoee3 =[];
    document.getElementById("unit_2").innerHTML = "OEE PLTA Ir. PM. Noor Unit 2";
      $.getJSON("https://spreadsheets.google.com/feeds/cells/1uOgTEWkmpxhXzsTd7yznLE-eodGnJVmX6Y0tiJGFxIU/2/public/basic?alt=json" ,function (data){
        var gan = data.feed.entry;
        for (var i = 0; i<gan.length; i++) {
              oee.push(gan[i].content.$t); 
        }
        for(var j = 0; j<11; j++){
            dataoee1.push(oee[j]);
        }
        for(var j = 50; j<64; j++){
            dataoee2.push(oee[j]);
        }
        for(var j = 64; j<75; j++){
            dataoee3.push(oee[j]);
        }
        oeen = dataoee2.map(Number);
        oeen[11] = (oeen[11]*100).toFixed(2);
        oeen[12] = (oeen[12]*100).toFixed(2);
        oeen[13] = (oeen[13]*100).toFixed(2);
        oeen[10] = (oeen[10]).toFixed(2);
        var avail = document.getElementById("output1_2");
        avail.innerHTML = oeen[11];
        var perf = document.getElementById("output2_2");
        perf.innerHTML = oeen[12];
        var oeee = document.getElementById("output3_2");
        oeee.innerHTML = oeen[13];
        var net = document.getElementById("net_2");
        net.innerHTML = oeen[10];
        var ctx = document.getElementById('jamChart_2').getContext('2d');
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
function oeeplta3_2(){
    var oee =[];
    var dataoee1 =[];
    var dataoee2 =[];
    var dataoee3 =[];
    document.getElementById("unit_3").innerHTML = "OEE PLTA Ir. PM. Noor Unit 3";
      $.getJSON("https://spreadsheets.google.com/feeds/cells/1ZgMf7p7TIF_gXHzm3kY9VE9h0dn9egFZQo6LRQpXfls/2/public/basic?alt=json" ,function (data){
        var gan = data.feed.entry;
        for (var i = 0; i<gan.length; i++) {
              oee.push(gan[i].content.$t); 
        }
        for(var j = 0; j<11; j++){
            dataoee1.push(oee[j]);
        }
        for(var j = 50; j<64; j++){
            dataoee2.push(oee[j]);
        }
        for(var j = 64; j<75; j++){
            dataoee3.push(oee[j]);
        }
        oeen = dataoee2.map(Number);
        oeen[11] = (oeen[11]*100).toFixed(2);
        oeen[12] = (oeen[12]*100).toFixed(2);
        oeen[13] = (oeen[13]*100).toFixed(2);
        oeen[10] = (oeen[10]).toFixed(2);
        var avail = document.getElementById("output1_3");
        avail.innerHTML = oeen[11];
        var perf = document.getElementById("output2_3");
        perf.innerHTML = oeen[12];
        var oeee = document.getElementById("output3_3");
        oeee.innerHTML = oeen[13];
        var net = document.getElementById("net_3");
        net.innerHTML = oeen[10];
        var ctx = document.getElementById('jamChart_3').getContext('2d');
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
