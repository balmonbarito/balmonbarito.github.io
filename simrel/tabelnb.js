function tabelnb(){
  // Try edit message
  var yoman =[];
  var label =[];
  var bep = [];
  var tabel="";
  var cek="";
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1F7RRznWwy3XNz_5-M0xnlGNuILZf_zjmFmeHAR5lk9U/8/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = 14; j<yoman.length; j++){
      if(yoman[j]!==""){
          label.push(yoman[j]);
      }
    }
    for(var i = 0; i <(label.length/14); i++){
      var lop = i*14;
      tabel += '<tr><th scope="row">'+ (i+1) +'</th>';
      for (var j=lop+1; j<(lop+6); j++){
        tabel += '<td>'+ label[j] + '</td>';
      }
      for (var j=lop+12; j<(lop+14); j++){
        tabel += '<td>'+ label[j] + '</td>';

      }
      tabel += '<td><div class="text-right"><label class="switch"><input type="checkbox" onclick="checkkp();"'+ 'id= "tombol'+ (i+1) +'"' +'><span class="slider round"></span></label></div></td></tr>';
    }
    
    var hasil = document.getElementById('output');
    hasil.innerHTML = tabel;
    var mesin = document.getElementById('mesirek');
    mesin.innerHTML = "Daftar • Mesin Relokasi ke PLTD Nangabulik";
  });
}
function  checknb(){
  var yoman =[];
  var label =[];
  var cek=0;

  var daya=[];
  var sfc=[];
  var biaya=[];
  var bep = [];

  var total=0;
  var totsfc=0;
  var totsfcs=0;
  var totbiaya=0;
  var totbep=0;

  var checkbox = [];
  var inter=[];
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1F7RRznWwy3XNz_5-M0xnlGNuILZf_zjmFmeHAR5lk9U/8/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = 14; j<yoman.length; j++){
      if(yoman[j]!==""){
          label.push(yoman[j]);
      }
    }
    inter = label.map(Number);
    for (var k=1; k<20; k++){
      checkbox[k] = document.getElementById("tombol"+(k));
      if(checkbox[k].checked == true){
         daya[k] = inter[4+(14*(k-1))];
         sfc[k] = inter[5+(14*(k-1))];
         biaya[k] = inter[12+(14*(k-1))];
      }
      if(checkbox[k].checked == false){
         daya[k] = 0;
         sfc[k] = 0;
         biaya[k] = 0;
      }
      total+=daya[k];
      totsfc+=sfc[k];
      totsfcs =totsfc/sfc.length;
      totbiaya+=biaya[k];

      var output = document.getElementById('jumdaya');
      output.innerHTML = total+" kW";
      var outputsfc = document.getElementById('jumsfc');
      outputsfc.innerHTML = totsfc.toFixed(3); +" liter/kWH";
      var outputbiaya = document.getElementById('jumbiaya');
      outputbiaya.innerHTML = "Rp "+ totbiaya.toLocaleString();
    }
  });    
}
function tabelreknb(){
  // Try edit message
  var yoman =[];
  var label =[];
  var inter = [];
  var tabel="";
  var batas;
  var totaldaya=0;
  var totsfc=0;
  var totbiaya=0;
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1F7RRznWwy3XNz_5-M0xnlGNuILZf_zjmFmeHAR5lk9U/8/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = 14; j<yoman.length; j++){
      if(yoman[j]!==""){
          label.push(yoman[j]);
      }
    }
    inter = label.map(Number);
    var inputdaya =JSON.parse(localStorage.getItem("datainput"));
    for(var k= 0; k<inter.length; k++){
      if(k%14==4 && totaldaya<inputdaya[1]){
        totaldaya+=inter[k];
        totsfc+=inter[k+1];
        totbiaya+=inter[k+8];
        batas=Math.round(k/14+0.5);
      }
    }
    totsfc=(totsfc/batas);
    var output = document.getElementById('jumdayarek');
    output.innerHTML = totaldaya+" kW";
    var outputsfc = document.getElementById('jumsfcrek');
    outputsfc.innerHTML = totsfc.toFixed(3); +" liter/kWH";
    var outputbiaya = document.getElementById('jumbiayarek');
    outputbiaya.innerHTML = "Rp "+ totbiaya.toLocaleString();
    var mesin = document.getElementById('mesin');
    mesin.innerHTML = "Relokasi • Mesin ke PLTD Nangabulik";

    for(var i = 0; i<(batas); i++){
      var lop = i*14;
      tabel += '<tr><th scope="row">'+ (i+1) +'</th>';
      for (var j=lop+1; j<(lop+6); j++){
        tabel += '<td>'+ label[j] + '</td>';
      }
      for (var j=lop+12; j<(lop+14); j++){
        tabel += '<td>'+ label[j] + '</td>';
      }
      tabel+='</tr>';
    }
    var hasil = document.getElementById('tabelrek');
    hasil.innerHTML = tabel;
  });
}
