
function formSubmit(){
	var $form = $('#gangguan'),
		url = 'https://script.google.com/macros/s/AKfycbwvTlEHP7gdnM5Zfl0Fqio9e-BvjeM5LJkvkCb-nUhKDZXextE/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}
function inputgangguan(){
	var page = localStorage.getItem("mesingangguan");
  var status = document.getElementById("25");
  status.innerHTML = "Need Approval";
    if(page == "mesin 2"){
      var judul = document.getElementById("judul");
      judul.innerHTML = "Mesin Sulzer #2";
      var mesin = document.getElementById("24");
      mesin.innerHTML = "Mesin 2";
    }
    if(page == "mesin 3"){
      var judul = document.getElementById("judul");
      judul.innerHTML = "Mesin Pielstick #3";
      var mesin = document.getElementById("24");
      mesin.innerHTML = "Mesin 3";
    }
    if(page == "mesin 5"){
      var judul = document.getElementById("judul");
      judul.innerHTML = "Mesin SWD 16 TM #5";
      var mesin = document.getElementById("24");
      mesin.innerHTML = "Mesin 5";
    }
    if(page == "mesin 6"){
      var judul = document.getElementById("judul");
      judul.innerHTML = "Mesin SWD 16 TM #6";
      var mesin = document.getElementById("24");
      mesin.innerHTML = "Mesin 6";
    }
    if(page == "mesin 9"){
      var judul = document.getElementById("judul");
      judul.innerHTML = "Mesin SWD 9 TM #9";
      var mesin = document.getElementById("24");
      mesin.innerHTML = "Mesin 9";
    }
    if(page == "mesin 10"){
      var judul = document.getElementById("judul");
      judul.innerHTML = "Mesin SWD 9 TM #10";
      var mesin = document.getElementById("24");
      mesin.innerHTML = "Mesin 10";
    }
}

function buttonsub(){
	for(var i = 0; i<27; i++){
		var formid = document.getElementById(i).value;
		if(formid == ""){
			document.getElementById(i).value = "-";
		}
	}
  formSubmit();
}

var input=[];
function simpan(){
  
  input[0] = document.getElementById("0").value;
  input[1] = document.getElementById("1").value;
  input[2] = document.getElementById("2").value;
  input[3] = document.getElementById("3").value;
  input[4] = document.getElementById("4").value;
  input[5] = document.getElementById("5").value;
  input[6] = document.getElementById("6").value;
  input[7] = document.getElementById("7").value;
  input[8] = document.getElementById("8").value;
  input[9] = document.getElementById("9").value;
  input[10] = document.getElementById("10").value;
  input[11] = document.getElementById("11").value;
  input[12] = document.getElementById("12").value;
  input[13] = document.getElementById("13").value;
  input[14] = document.getElementById("14").value;
  input[15] = document.getElementById("15").value;
  input[16] = document.getElementById("16").value;
  input[17] = document.getElementById("17").value;
  input[18] = document.getElementById("18").value;
  input[19] = document.getElementById("19").value;
  input[20] = document.getElementById("20").value;
  input[21] = document.getElementById("21").value;
  input[22] = document.getElementById("22").value;
  input[23] = document.getElementById("23").value;

  localStorage.setItem("inputdata", JSON.stringify(input));
}
var output = [];
function outputdata(){
  output=JSON.parse(localStorage.getItem("inputdata"));

  document.getElementById("spd").innerHTML = output[0];
  document.getElementById("part").innerHTML = output[1];
  document.getElementById("waktu").innerHTML = output[2];
  //document.getElementById("3").innerHTML = output[3];
  //document.getElementById("4").innerHTML = output[4];
  //document.getElementById("5").innerHTML = output[5];
  document.getElementById("gejala").innerHTML = output[6];
  document.getElementById("urutan").innerHTML = output[7];
  document.getElementById("analisa").innerHTML = output[8];
  document.getElementById("jsb").innerHTML = output[9];
  document.getElementById("jsmo").innerHTML = output[10];
  document.getElementById("pemeriksaan").innerHTML = output[11];
  document.getElementById("mampu").innerHTML = output[12];
  document.getElementById("puncak").innerHTML = output[13];
  document.getElementById("tindakan").innerHTML = output[14];
  document.getElementById("pelaksanaan").innerHTML = output[15];
  document.getElementById("pekerjaan").innerHTML = output[16];
  document.getElementById("material").innerHTML = output[17];
  document.getElementById("biaya").innerHTML = output[18];
  document.getElementById("lainlain").innerHTML = output[19];
  document.getElementById("manager").innerHTML = output[20];
  document.getElementById("spv").innerHTML = output[21];
  document.getElementById("namaman").innerHTML = output[22];
  document.getElementById("namaspv").innerHTML = output[23];

  var mesin = localStorage.getItem("mesingangguan");
  if(mesin == "mesin 2"){
    document.getElementById("no").innerHTML="II (Dua)";
    document.getElementById("tipe").innerHTML="Sulzer 12 ZV 40/48";
    document.getElementById("seri").innerHTML="740023";
    document.getElementById("dmn").innerHTML="6.400 KW";

  }
  if(mesin == "mesin 3"){
    document.getElementById("no").innerHTML="III (Tiga)";
    document.getElementById("tipe").innerHTML="Pielstick 12 PC 2.4V";
    document.getElementById("seri").innerHTML="3140";
    document.getElementById("dmn").innerHTML="5.400 KW";

  }
  if(mesin == "mesin 5"){
    document.getElementById("no").innerHTML="V (Lima)";
    document.getElementById("tipe").innerHTML="SWD 16 TM 410R";
    document.getElementById("seri").innerHTML="3666";
    document.getElementById("dmn").innerHTML="8.800 KW";

  }
  if(mesin == "mesin 6"){
    document.getElementById("no").innerHTML="VI (Enam)";
    document.getElementById("tipe").innerHTML="SWD 16 TM 410R";
    document.getElementById("seri").innerHTML="3667";
    document.getElementById("dmn").innerHTML="8.800 KW";

  }
  if(mesin == "mesin 9"){
    document.getElementById("no").innerHTML="IX (Sembilan)";
    document.getElementById("tipe").innerHTML="SWD 9 TM 620C";
    document.getElementById("seri").innerHTML="62100";
    document.getElementById("dmn").innerHTML="12.400 KW";

  }
  if(mesin == "mesin 10"){
    document.getElementById("no").innerHTML="X (Sepuluh)";
    document.getElementById("tipe").innerHTML="SWD 9 TM 620C";
    document.getElementById("seri").innerHTML="62000";
    document.getElementById("dmn").innerHTML="12.400 KW";

  }

  
  modal.style.display = "block";
 
}



	
