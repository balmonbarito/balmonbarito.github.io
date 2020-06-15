$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

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

//get data from google sheets
var input=[];
function simpan(){
  input[0] = document.getElementById("tujuan").value;
  input[1] = document.getElementById("inputdaya").value;
  localStorage.setItem("datainput", JSON.stringify(input));
}
function formSubmit(){
  var $form = $('#grid'),
  url = 'https://script.google.com/macros/s/AKfycbxeDDDIRh52_vIG_qN8b0u0Q2JnkjL5uMA8A2Vp2SUwoXmSC3k/exec'
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
  })
}
function pindah(){
  //checkgrid();
  formSubmit();
  setTimeout(function(){
    simpan();
  }, 800 );
        
  setTimeout(function(){
    window.open("hasil.html", "_self");
  }, 800 );
}
