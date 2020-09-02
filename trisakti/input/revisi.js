var kolom = 29;
function tabelrev(){
  // Try edit message
  var yoman =[];
  var label =[];
  var bep = [];
  var tabel="";
  var cek="";
  var nomer=[];
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/16_manoGg2Z0OWB5SfT4F6HWeLqxkKOvzI4BqO542Lbo/5/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = kolom; j<yoman.length; j++){
      if(yoman[j]!==""){
          label.push(yoman[j]);
      }
    }
    for(var i = 0; i <(label.length/(kolom)); i++){
      var lop = i*(kolom);
      tabel += '<tr><th scope="row">'+ (i+1) +'</th>';

      if(label[lop] == "#N/A"){
        tabel +='<td colspan="6" class="text-center">Belum Ada LH05 Revisi</td></tr>';
      }
      else{
        for (var j=lop; j<(lop+4); j++){
          tabel += '<td>'+ label[j] + '</td>';

        }
        tabel += '<td><button type="button" class="btn btn-primary btn-sm" onclick="moderev(this.id);"'+ 'id= "tombol'+ (i+1) +'"' +'><i class="fa fa-file-pdf mr-2"></i>LH05</button></td><td><button type="button" class="btn btn-danger btn-sm" onclick="moderevisi(this.id);"'+ 'id= "rev'+ (i+1) +'"' +'><i class="fa fa-tag mr-2" aria-hidden="true"></i>Revisi LH05</button></td></tr>';
      }
    }
    
    var hasil = document.getElementById('outputtabelapp');
    hasil.innerHTML = tabel;
  });
}
function searchingrev() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("cari");
  filter = input.value.toUpperCase();
  table = document.getElementById("outputtabelapp");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function moderev(clicked) {
  var yoman =[];
  var label =[];


  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/16_manoGg2Z0OWB5SfT4F6HWeLqxkKOvzI4BqO542Lbo/5/public/basic?alt=json" ,function (data){
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
      modal.style.display = "none";

    }
  }

}

function moderevisi(clicked) {
  var yoman =[];
  var label =[];

  var rev = document.getElementById("revisi");
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/16_manoGg2Z0OWB5SfT4F6HWeLqxkKOvzI4BqO542Lbo/5/public/basic?alt=json" ,function (data){
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
      if(clicked == "rev"+k){
        var jsb = label[(k-1)*kolom+11];
        document.getElementById('9').innerHTML = jsb;
        var jsmo = label[(k-1)*kolom+12];
        document.getElementById('10').innerHTML = jsmo;

        var mesin = label[(k-1)*kolom];
        document.getElementById('24').innerHTML = mesin;
        document.getElementById('25').innerHTML = "Need Approval";
        var part = label[(k-1)*kolom+2];
        document.getElementById('1').innerHTML = part;
        var gejala = label[(k-1)*kolom+7];
        document.getElementById('6').innerHTML = gejala;
        var urutan = label[(k-1)*kolom+8];
        document.getElementById('7').innerHTML = urutan;
        var analisa = label[(k-1)*kolom+9];
        document.getElementById('8').innerHTML = analisa;
        var pemeriksaan = label[(k-1)*kolom+10];
        document.getElementById('11').innerHTML = pemeriksaan;
        var mampu = label[(k-1)*kolom+13];
        document.getElementById('12').innerHTML = mampu;
        var puncak = label[(k-1)*kolom+14];
        document.getElementById('13').innerHTML = puncak;
        var tindakan = label[(k-1)*kolom+15];
        document.getElementById('14').innerHTML = tindakan;
        var pelaksanaan = label[(k-1)*kolom+16];
        document.getElementById('15').innerHTML = pelaksanaan;
        var pekerjaan = label[(k-1)*kolom+17];
        document.getElementById('16').innerHTML = pekerjaan;
        var material = label[(k-1)*kolom+18];
        document.getElementById('17').innerHTML = material;
        var biaya = label[(k-1)*kolom+19];
        document.getElementById('18').innerHTML = biaya;
        var lainlain = label[(k-1)*kolom+20];
        document.getElementById('19').innerHTML = lainlain;

        var namaman = label[(k-1)*kolom+22];
        document.getElementById('22').innerHTML = namaman;

        var namaspv = label[(k-1)*kolom+24];
        document.getElementById('23').innerHTML = namaspv;

        var kode = label[(k-1)*kolom+26];
        document.getElementById('26').innerHTML = kode;

        var catat = label[(k-1)*kolom+27];
        document.getElementById('28').innerHTML = catat;

        document.getElementById('27').innerHTML = "-";

        var tombolrev = '<button type="submit" class="btn btn-info ml-3" onclick="tombolrev(this.id);"'+ 'id= "rev'+ (k) +'"' +'><i class="fa fa-paper-plane mr-2" aria-hidden="true"></i>Kirim Revisi</button>';
        document.getElementById('tombol').innerHTML = tombolrev;

      }
    }
    
  });
  rev.style.display = "block";
  window.onclick = function(event) {
    if (event.target == rev) {
      rev.style.display = "none";
    }
  }

}

function tombolrev(clicked) {
  var yoman =[];
  var label =[];
  var datastatus='';

  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/16_manoGg2Z0OWB5SfT4F6HWeLqxkKOvzI4BqO542Lbo/5/public/basic?alt=json" ,function (data){
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
      if(clicked == "rev"+k){
        var nomor = label[(k-1)*kolom+26];
        datastatus+= 'koderevisi='+ nomor+'&';


        var $form = $('#gangguanrevisi');
        
        var data = datastatus + $form.serialize();

        for(var i = 0; i<29; i++){
          var formid = document.getElementById(i).value;
          if(formid == ""){
            document.getElementById(i).value = "-";
          }
        }
        url = 'https://script.google.com/macros/s/AKfycbwZ_OgAjtGpRTiJpFpYdmiyABugkRwjLsbEcs1l52Fd5ceCEzo/exec'
        $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          data: data,
        });
        setTimeout(function(){
          window.open("revisi.html", "_self");
        }, 800 );

      }
    }
    console.log(data);
  })
}