var kolom = 29;
function tabel(){
  // Try edit message
  var yoman =[];
  var label =[];
  var bep = [];
  var tabel="";
  var cek="";
  var nomer=[];
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/16_manoGg2Z0OWB5SfT4F6HWeLqxkKOvzI4BqO542Lbo/2/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = kolom; j<yoman.length; j++){
      if(yoman[j]!==""){
          label.push(yoman[j]);
      }
    }
    
    
    for(var i = 0; i <(label.length/kolom); i++){
      var lop = i*kolom;
      tabel += '<tr><th scope="row">'+ (i+1) +'</th>';
      for (var j=lop; j<(lop+4); j++){
        tabel += '<td>'+ label[j] + '</td>';

      }
      tabel += '<td><button type="button" class="btn btn-primary btn-sm" onclick="mode(this.id);"'+ 'id= "tombol'+ (i+1) +'"' +'><i class="fa fa-file-pdf mr-2"></i>LH05</button></td></tr>';
    }
    
    var hasil = document.getElementById('outputtabel');
    hasil.innerHTML = tabel;

  });
}
function tabelapp(){
  // Try edit message
  var yoman =[];
  var label =[];
  var bep = [];
  var tabel="";
  var cek="";
  var nomer=[];
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/16_manoGg2Z0OWB5SfT4F6HWeLqxkKOvzI4BqO542Lbo/3/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = kolom; j<yoman.length; j++){
      if(yoman[j]!==""){
          label.push(yoman[j]);
      }
    }
    for(var i = 0; i <(label.length/kolom); i++){
      var lop = i*kolom;
      tabel += '<tr><th scope="row">'+ (i+1) +'</th>';

      if(label[lop] == "#N/A"){
        tabel +='<td colspan="6" class="text-center">Belum Ada LH05 yang butuh persetujuan</td></tr>';
      }
      else{
        for (var j=lop; j<(lop+4); j++){
          tabel += '<td>'+ label[j] + '</td>';

        }
        tabel += '<td><button type="button" class="btn btn-primary btn-sm" onclick="modeapp(this.id);"'+ 'id= "tombol'+ (i+1) +'"' +'><i class="fa fa-file-pdf mr-2"></i>LH05</button></td><td><button type="button" class="btn btn-danger btn-sm"'+ 'id= "tombol'+ (i+1) +'"' +'><i class="fa fa-check mr-2" aria-hidden="true"></i>Need Approval</button></td></tr>';
      }
    }
    
    var hasil = document.getElementById('outputtabelapp');
    hasil.innerHTML = tabel;
  });
}




// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks the button, open the modal 
function mode(clicked) {
  var yoman =[];
  var label =[];


  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/16_manoGg2Z0OWB5SfT4F6HWeLqxkKOvzI4BqO542Lbo/2/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = kolom; j<yoman.length; j++){
      if(yoman[j]!==""){
          label.push(yoman[j]);
      }
    }
    var elText1="";
    var elText2="";
    for(var k = 1; k<(label.length/kolom)+1; k++){
      if(clicked == "tombol"+k){
        var jsb = label[(k-1)*kolom+11];
        document.getElementById('jsb').innerHTML = jsb;
        var jsmo = label[(k-1)*kolom+12];
        document.getElementById('jsmo').innerHTML = jsmo;
        var waktu = label[(k-1)*kolom+3] + " ("+label[(k-1)*kolom+4]+") WITA";
        document.getElementById('waktu').innerHTML = waktu;

        var mesin = label[(k-1)*kolom];
        if(mesin == "Mesin 2"){
          document.getElementById("no").innerHTML="II (Dua)";
          document.getElementById("tipe").innerHTML="Sulzer 12 ZV 40/48";
          document.getElementById("seri").innerHTML="740023";
          document.getElementById("dmn").innerHTML="6.400 KW";

        }
        if(mesin == "Mesin 3"){
          document.getElementById("no").innerHTML="III (Tiga)";
          document.getElementById("tipe").innerHTML="Pielstick 12 PC 2.4V";
          document.getElementById("seri").innerHTML="3140";
          document.getElementById("dmn").innerHTML="5.400 KW";

        }
        if(mesin == "Mesin 5"){
          document.getElementById("no").innerHTML="V (Lima)";
          document.getElementById("tipe").innerHTML="SWD 16 TM 410R";
          document.getElementById("seri").innerHTML="3666";
          document.getElementById("dmn").innerHTML="8.800 KW";

        }
        if(mesin == "Mesin 6"){
          document.getElementById("no").innerHTML="VI (Enam)";
          document.getElementById("tipe").innerHTML="SWD 16 TM 410R";
          document.getElementById("seri").innerHTML="3667";
          document.getElementById("dmn").innerHTML="8.800 KW";

        }
        if(mesin == "Mesin 9"){
          document.getElementById("no").innerHTML="IX (Sembilan)";
          document.getElementById("tipe").innerHTML="SWD 9 TM 620C";
          document.getElementById("seri").innerHTML="62100";
          document.getElementById("dmn").innerHTML="12.400 KW";

        }
        if(mesin == "Mesin 10"){
          document.getElementById("no").innerHTML="X (Sepuluh)";
          document.getElementById("tipe").innerHTML="SWD 9 TM 620C";
          document.getElementById("seri").innerHTML="62000";
          document.getElementById("dmn").innerHTML="12.400 KW";

        }

        var spd = label[(k-1)*kolom+1];
        document.getElementById('spd').innerHTML = spd;
        var part = label[(k-1)*kolom+2];
        document.getElementById('part').innerHTML = part;
        var gejala = label[(k-1)*kolom+7];
        document.getElementById('gejala').innerHTML = gejala;
        var urutan = label[(k-1)*kolom+8];
        document.getElementById('urutan').innerHTML = urutan;
        var analisa = label[(k-1)*kolom+9];
        document.getElementById('analisa').innerHTML = analisa;
        var pemeriksaan = label[(k-1)*kolom+10];
        document.getElementById('pemeriksaan').innerHTML = pemeriksaan;
        var mampu = label[(k-1)*kolom+13];
        document.getElementById('mampu').innerHTML = mampu;
        var puncak = label[(k-1)*kolom+14];
        document.getElementById('puncak').innerHTML = puncak;
        var tindakan = label[(k-1)*kolom+15];
        document.getElementById('tindakan').innerHTML = tindakan;
        var pelaksanaan = label[(k-1)*kolom+16];
        document.getElementById('pelaksanaan').innerHTML = pelaksanaan;
        var pekerjaan = label[(k-1)*kolom+17];
        document.getElementById('pekerjaan').innerHTML = pekerjaan;
        var material = label[(k-1)*kolom+18];
        document.getElementById('material').innerHTML = material;
        var biaya = label[(k-1)*kolom+19];
        document.getElementById('biaya').innerHTML = biaya;
        var lainlain = label[(k-1)*kolom+20];
        document.getElementById('lainlain').innerHTML = lainlain;
        var manager = label[(k-1)*kolom+21];
        document.getElementById('manager').innerHTML = manager;
        var namaman = label[(k-1)*kolom+22];
        document.getElementById('namaman').innerHTML = namaman;
        var spv = label[(k-1)*kolom+23];
        document.getElementById('spv').innerHTML = spv;
        var namaspv = label[(k-1)*kolom+24];
        document.getElementById('namaspv').innerHTML = namaspv;
        var tgl = label[(k-1)*kolom+28];
        document.getElementById('tgl').innerHTML = "Banjarmasin, " + tgl;
        var nomor = label[(k-1)*kolom+26];
        document.getElementById('nomor').innerHTML = "NOMER : " +nomor+"/LH05/ULPLTD.TRS/VIII/2020";

        var qrcode1 = new QRCode(document.getElementById("qrcode1"), {
          width : 90,
          height : 90
        });    
        var qrcode2 = new QRCode(document.getElementById("qrcode2"), {
          width : 90,
          height : 90
        });

        elText1 = namaspv+ ", "+spv+ " ULPLTD/G Trisakti";
        

        elText2 = namaman+ ", "+manager+ " PLTD/G Trisakti ";
        qrcode1.makeCode(elText1);
    qrcode2.makeCode(elText2);
      }
    }
    
  });
  modal.style.display = "block";
  window.onclick = function(event) {
    if (event.target == modal) {
      $("#qrcode1").empty();
      $("#qrcode2").empty();
      modal.style.display = "none";

    }
  }

}
// When the user clicks anywhere outside of the modal, close it
function modeapp(clicked) {
  var yoman =[];
  var label =[];


  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/16_manoGg2Z0OWB5SfT4F6HWeLqxkKOvzI4BqO542Lbo/3/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = kolom; j<yoman.length; j++){
      if(yoman[j]!==""){
          label.push(yoman[j]);
      }
    }
    for(var k = 1; k<(label.length/kolom)+1; k++){
      if(clicked == "tombol"+k){
        var jsb = label[(k-1)*kolom+11];
        document.getElementById('jsb').innerHTML = jsb;
        var jsmo = label[(k-1)*kolom+12];
        document.getElementById('jsmo').innerHTML = jsmo;
        var waktu = label[(k-1)*kolom+3] + " ("+label[(k-1)*kolom+4]+") WITA";
        document.getElementById('waktu').innerHTML = waktu;

        var mesin = label[(k-1)*kolom];
        if(mesin == "Mesin 2"){
          document.getElementById("no").innerHTML="II (Dua)";
          document.getElementById("tipe").innerHTML="Sulzer 12 ZV 40/48";
          document.getElementById("seri").innerHTML="740023";
          document.getElementById("dmn").innerHTML="6.400 KW";

        }
        if(mesin == "Mesin 3"){
          document.getElementById("no").innerHTML="III (Tiga)";
          document.getElementById("tipe").innerHTML="Pielstick 12 PC 2.4V";
          document.getElementById("seri").innerHTML="3140";
          document.getElementById("dmn").innerHTML="5.400 KW";

        }
        if(mesin == "Mesin 5"){
          document.getElementById("no").innerHTML="V (Lima)";
          document.getElementById("tipe").innerHTML="SWD 16 TM 410R";
          document.getElementById("seri").innerHTML="3666";
          document.getElementById("dmn").innerHTML="8.800 KW";

        }
        if(mesin == "Mesin 6"){
          document.getElementById("no").innerHTML="VI (Enam)";
          document.getElementById("tipe").innerHTML="SWD 16 TM 410R";
          document.getElementById("seri").innerHTML="3667";
          document.getElementById("dmn").innerHTML="8.800 KW";

        }
        if(mesin == "Mesin 9"){
          document.getElementById("no").innerHTML="IX (Sembilan)";
          document.getElementById("tipe").innerHTML="SWD 9 TM 620C";
          document.getElementById("seri").innerHTML="62100";
          document.getElementById("dmn").innerHTML="12.400 KW";

        }
        if(mesin == "Mesin 10"){
          document.getElementById("no").innerHTML="X (Sepuluh)";
          document.getElementById("tipe").innerHTML="SWD 9 TM 620C";
          document.getElementById("seri").innerHTML="62000";
          document.getElementById("dmn").innerHTML="12.400 KW";

        }

        var spd = label[(k-1)*kolom+1];
        document.getElementById('spd').innerHTML = spd;
        var part = label[(k-1)*kolom+2];
        document.getElementById('part').innerHTML = part;
        var gejala = label[(k-1)*kolom+7];
        document.getElementById('gejala').innerHTML = gejala;
        var urutan = label[(k-1)*kolom+8];
        document.getElementById('urutan').innerHTML = urutan;
        var analisa = label[(k-1)*kolom+9];
        document.getElementById('analisa').innerHTML = analisa;
        var pemeriksaan = label[(k-1)*kolom+10];
        document.getElementById('pemeriksaan').innerHTML = pemeriksaan;
        var mampu = label[(k-1)*kolom+13];
        document.getElementById('mampu').innerHTML = mampu;
        var puncak = label[(k-1)*kolom+14];
        document.getElementById('puncak').innerHTML = puncak;
        var tindakan = label[(k-1)*kolom+15];
        document.getElementById('tindakan').innerHTML = tindakan;
        var pelaksanaan = label[(k-1)*kolom+16];
        document.getElementById('pelaksanaan').innerHTML = pelaksanaan;
        var pekerjaan = label[(k-1)*kolom+17];
        document.getElementById('pekerjaan').innerHTML = pekerjaan;
        var material = label[(k-1)*kolom+18];
        document.getElementById('material').innerHTML = material;
        var biaya = label[(k-1)*kolom+19];
        document.getElementById('biaya').innerHTML = biaya;
        var lainlain = label[(k-1)*kolom+20];
        document.getElementById('lainlain').innerHTML = lainlain;
        var manager = label[(k-1)*kolom+21];
        document.getElementById('manager').innerHTML = manager;
        var namaman = label[(k-1)*kolom+22];
        document.getElementById('namaman').innerHTML = namaman;
        var spv = label[(k-1)*kolom+23];
        document.getElementById('spv').innerHTML = spv;
        var namaspv = label[(k-1)*kolom+24];
        document.getElementById('namaspv').innerHTML = namaspv;
        var tgl = label[(k-1)*kolom+28];
        document.getElementById('tgl').innerHTML = "Banjarmasin, " + tgl;
        var nomor = label[(k-1)*kolom+26];
        document.getElementById('nomor').innerHTML = "NOMER : " +nomor+"/LH05/ULPLTD.TRS/VIII/2020";

      }
    }
    
  });
  modal.style.display = "block";
  window.onclick = function(event) {
    if (event.target == modal) {
      $("#qrcode1").empty();
      modal.style.display = "none";

    }
  }

}


