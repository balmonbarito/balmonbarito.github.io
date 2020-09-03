//login function
function session(){
  var logindata = JSON.parse(localStorage.getItem("cp"));
  var hours = 0.5*60*60*1000;
  var cpnow = new Date().getTime();
  var delta = cpnow-logindata;
  if(logindata == null){
    window.location.replace("/index.html");
  }
  if(delta > hours){
    window.location.replace("/index.html");
  }
  else{
    console.log("masih login");
  }
}

//logout function
function logout(){
  localStorage.removeItem('cp');
  window.open("/index.html");
}

//notification
var but = document.getElementById("dropdownMenuButton");
var notf = document.getElementById("notf1");
var notf2 = document.getElementById("notf2");
var title = document.getElementById("title");
notf.style.display == "block" ;
but.onclick=function(event) {
  if (event.target == but) {
    notf.style.display = "none";
  }
}

function notif(){
  var kolom = 29;
  var yoman =[];
  var label =[];
  var notific = [];

  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/16_manoGg2Z0OWB5SfT4F6HWeLqxkKOvzI4BqO542Lbo/4/public/basic?alt=json" ,function (data){
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
      var isi = label[0];
      if(isi =="#N/A"){
        notific = "";
      }
      else{
        notific.push(k);
      }
    }
    notf.innerHTML = notific.length;
    notf2.innerHTML = notific.length;

    if(notific.length == 0){
      notf.style.display = "none";
      notf2.style.display = "none";
      title.innerHTML = "BALMON";
    }else{
      notf.style.display = "block";
      notf2.style.display = "block";
      title.innerHTML = "("+ notific.length +") BALMON" ;
    }
  })
}


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//login function

//logout function
function logout(){
  localStorage.removeItem('cp');
  window.location.replace("/index.html");
}

//date generator
function date(){
  var bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September','Oktober','November', 'Desember'];
  var tanggal = new Date().getDate();
  var _bulan = new Date().getMonth();
  var _tahun = new Date().getYear();
  var tahun = _tahun +1900;
  var bulan = bulan[_bulan];
  var lengkap = 'Banjarmasin, '+ tanggal + ' ' + bulan + ' ' + tahun;
  var tgl = document.getElementById("tgl");
    tgl.innerHTML = lengkap;
  }

