      var bar2 =[];
      var label3 =[];
      var time = [];
      var inter =[];
      var total = 0;
      $.getJSON("https://spreadsheets.google.com/feeds/cells/1mPy5mL6vN86HA7yMthPo4PR1CXdFDd8bFTjvv6P0suA/3/public/basic?alt=json" ,function (data){
        var gan = data.feed.entry;
        for (var i = 6; i<gan.length; i++) {
              bar2.push(gan[i].content.$t); 
        }
        inter = bar2.map(Number);
        var swd16 = inter[2]+inter[3];
        var swd9 = inter[4]+inter[5];

        var mesin5 = document.getElementById("mesin5");
        mesin5.innerHTML = inter[2];
        var mesin6 = document.getElementById("mesin6");
        mesin6.innerHTML = inter[3];
        var mesin9 = document.getElementById("mesin9");
        mesin9.innerHTML = inter[4];
        var mesin10 = document.getElementById("mesin10");
        mesin10.innerHTML = inter[5];
        var sulzer = document.getElementById("mesin2");
        sulzer.innerHTML = inter[0];
        var pielstick = document.getElementById("mesin3");
        pielstick.innerHTML = inter[1];

        var total = inter[0]+inter[1]+inter[2]+inter[3]+inter[4]+inter[5];
        var dswd16 =(swd16/total)*100;
        dswd16=dswd16.toFixed(2);
        var dswd9 =(swd9/total)*100;
        dswd9=dswd9.toFixed(2);
        var dsulzer =(inter[0]/total)*100;
        dsulzer=dsulzer.toFixed(2);
        var dpielstick =(inter[1]/total)*100;
        dpielstick=dpielstick.toFixed(2);

        new Chart(document.getElementById("doughnut-chart"), {
            type: 'doughnut',
            data: {
              labels: ["Sulzer", "Pielstik", "SWD 16 TM", "SWD 9 TM"],
              datasets: [
                {
                  label: "Population (millions)",
                  backgroundColor: ["#3e95cd", "rgba(255, 99, 132)","#8e5ea2","rgba(255, 206, 86)"],
                  data: [dsulzer,dpielstick, dswd16,dswd9]
                }
              ]
            },
            options: {
              title: {
                display: false,
              }
            }
        });

      })
      var line =[];
      var interl =[];
      var totall = 0;
      $.getJSON("https://spreadsheets.google.com/feeds/cells/1mPy5mL6vN86HA7yMthPo4PR1CXdFDd8bFTjvv6P0suA/6/public/basic?alt=json" ,function (data){
        var gan = data.feed.entry;
        for (var i = 24; i<36; i++) {
              line.push(gan[i].content.$t); 
        }
        interl = line.map(Number);
        for (var k = 0; k<interl.length; k++){
          totall += interl[k];
        }
        //var hasill = document.getElementById("output");
        //hasill.innerHTML = totall;
        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Januari','Februari','Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
                datasets: [{
                    label: 'Total Gangguan',
                    data: line,
                    backgroundColor:
                        'rgba(54, 162, 235, 0.4)',
                    borderColor:
                        'rgba(54, 162, 235, 1)',
                        
                    borderWidth: 2
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
      })
