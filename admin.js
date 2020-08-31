$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//login function
function session(){
  var logindata = JSON.parse(localStorage.getItem("cp"));
  var hours = 0.05*60*60*1000;
  var cpnow = new Date().getTime();
  var delta = cpnow-logindata;
  if(logindata == null){
    window.location.replace("index.html");
  }
  if(delta > hours){
    window.location.replace("index.html");
  }
  else{
    console.log("masih login");
  }
}

//logout function
function logout(){
  localStorage.removeItem('cp');
  window.open("login.html");
}

//get data from google sheets
function formSubmit2(){
	var $form = $('#gangguan2'),
		url = 'https://script.google.com/macros/s/AKfycbxg7ViwaSxd07ush3-yg-HyjuGVA0Bp8tAJdvQ/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}

function formSubmit3(){
	var $form = $('#gangguan3'),
		url = 'https://script.google.com/macros/s/AKfycbycQIQ55QgWoXVxX9Zgaz0THq85Bq8CtWMW7jz-/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}

function formSubmit5(){
	var $form = $('#gangguan5'),
		url = 'https://script.google.com/macros/s/AKfycbw_JoV_Yl6CH7BW-nVAWh-oaSuT4OOBDN8e3ys/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}

function formSubmit6(){
	var $form = $('#gangguan6'),
		url = 'https://script.google.com/macros/s/AKfycbw8D_76m9t7AdyiBrk59ttup3dQJYp8hpx_9wfUACLR_Uy1NK8/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}

function formSubmit9(){
	var $form = $('#gangguan9'),
		url = 'https://script.google.com/macros/s/AKfycbyQto71VQ6pRh5bSR_eKnPncci-h0u2IbHdlIjE/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}

function formSubmit10(){
	var $form = $('#gangguan10'),
		url = 'https://script.google.com/macros/s/AKfycbzlNhrnuMGBiZialc_AfL86Jrm_xDsrIezQJDHm096471vbv-8/exec'
	$.ajax({
	url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize(),
	})
}

//input data to local storage
//display data from local storage to lh09 page
var input2=[];
function simpan2(){
	
 	input2[0] = document.getElementById("0_2").value;
 	input2[1] = document.getElementById("1_2").value;
	input2[2] = document.getElementById("2_2").value;
 	input2[3] = document.getElementById("3_2").value;
 	input2[4] = document.getElementById("4_2").value;
 	input2[5] = document.getElementById("5_2").value;
 	input2[6] = document.getElementById("6_2").value;
 	input2[7] = document.getElementById("7_2").value;
 	input2[8] = document.getElementById("8_2").value;
 	input2[9] = document.getElementById("9_2").value;
 	input2[10] = document.getElementById("10_2").value;
 	input2[11] = document.getElementById("11_2").value;
 	input2[12] = document.getElementById("12_2").value;
 	input2[13] = document.getElementById("13_2").value;
 	input2[14] = document.getElementById("14_2").value;
 	
 	localStorage.setItem("datainput2", JSON.stringify(input2));
}
var output2 = [];
function output_2(){
      output2=JSON.parse(localStorage.getItem("datainput2"));

      document.getElementById("0_2").innerHTML = output2[0];
      document.getElementById("1_2").innerHTML = output2[1];
      document.getElementById("2_2").innerHTML = output2[2];
      document.getElementById("3_2").innerHTML = output2[3];
      document.getElementById("4_2").innerHTML = output2[4];
      document.getElementById("5_2").innerHTML = output2[5];
      document.getElementById("6_2").innerHTML = output2[6];
      document.getElementById("7_2").innerHTML = output2[7];
      document.getElementById("8_2").innerHTML = output2[8];
      document.getElementById("9_2").innerHTML = output2[9];
      document.getElementById("10_2").innerHTML = output2[10];
      document.getElementById("11_2").innerHTML = output2[11];
      document.getElementById("12_2").innerHTML = output2[12];
      document.getElementById("13_2").innerHTML = output2[13];
      document.getElementById("14_2").innerHTML = output2[14];
}
var input3=[];
function simpan3(){
	
 	input3[0] = document.getElementById("0_3").value;
 	input3[1] = document.getElementById("1_3").value;
	input3[2] = document.getElementById("2_3").value;
 	input3[3] = document.getElementById("3_3").value;
 	input3[4] = document.getElementById("4_3").value;
 	input3[5] = document.getElementById("5_3").value;
 	input3[6] = document.getElementById("6_3").value;
 	input3[7] = document.getElementById("7_3").value;
 	input3[8] = document.getElementById("8_3").value;
 	input3[9] = document.getElementById("9_3").value;
 	input3[10] = document.getElementById("10_3").value;
 	input3[11] = document.getElementById("11_3").value;
 	input3[12] = document.getElementById("12_3").value;
 	input3[13] = document.getElementById("13_3").value;
 	input3[14] = document.getElementById("14_3").value;
 	
 	localStorage.setItem("datainput3", JSON.stringify(input3));
}
var output3 = [];
function output_3(){
      output3=JSON.parse(localStorage.getItem("datainput3"));

      document.getElementById("0_3").innerHTML = output3[0];
      document.getElementById("1_3").innerHTML = output3[1];
      document.getElementById("2_3").innerHTML = output3[2];
      document.getElementById("3_3").innerHTML = output3[3];
      document.getElementById("4_3").innerHTML = output3[4];
      document.getElementById("5_3").innerHTML = output3[5];
      document.getElementById("6_3").innerHTML = output3[6];
      document.getElementById("7_3").innerHTML = output3[7];
      document.getElementById("8_3").innerHTML = output3[8];
      document.getElementById("9_3").innerHTML = output3[9];
      document.getElementById("10_3").innerHTML = output3[10];
      document.getElementById("11_3").innerHTML = output3[11];
      document.getElementById("12_3").innerHTML = output3[12];
      document.getElementById("13_3").innerHTML = output3[13];
      document.getElementById("14_3").innerHTML = output3[14];
}
var input5=[];
function simpan5(){
	
 	input5[0] = document.getElementById("0_5").value;
 	input5[1] = document.getElementById("1_5").value;
	input5[2] = document.getElementById("2_5").value;
 	input5[3] = document.getElementById("3_5").value;
 	input5[4] = document.getElementById("4_5").value;
 	input5[5] = document.getElementById("5_5").value;
 	input5[6] = document.getElementById("6_5").value;
 	input5[7] = document.getElementById("7_5").value;
 	input5[8] = document.getElementById("8_5").value;
 	input5[9] = document.getElementById("9_5").value;
 	input5[10] = document.getElementById("10_5").value;
 	input5[11] = document.getElementById("11_5").value;
 	input5[12] = document.getElementById("12_5").value;
 	input5[13] = document.getElementById("13_5").value;
 	input5[14] = document.getElementById("14_5").value;
 	
 	localStorage.setItem("datainput5", JSON.stringify(input5));
}
var output5 = [];
function output_5(){
      output5=JSON.parse(localStorage.getItem("datainput5"));

      document.getElementById("0_5").innerHTML = output5[0];
      document.getElementById("1_5").innerHTML = output5[1];
      document.getElementById("2_5").innerHTML = output5[2];
      document.getElementById("3_5").innerHTML = output5[3];
      document.getElementById("4_5").innerHTML = output5[4];
      document.getElementById("5_5").innerHTML = output5[5];
      document.getElementById("6_5").innerHTML = output5[6];
      document.getElementById("7_5").innerHTML = output5[7];
      document.getElementById("8_5").innerHTML = output5[8];
      document.getElementById("9_5").innerHTML = output5[9];
      document.getElementById("10_5").innerHTML = output5[10];
      document.getElementById("11_5").innerHTML = output5[11];
      document.getElementById("12_5").innerHTML = output5[12];
      document.getElementById("13_5").innerHTML = output5[13];
      document.getElementById("14_5").innerHTML = output5[14];
}

var input6=[];
function simpan6(){
        
    input6[0] = document.getElementById("0_6").value;
    input6[1] = document.getElementById("1_6").value;
    input6[2] = document.getElementById("2_6").value;
    input6[3] = document.getElementById("3_6").value;
    input6[4] = document.getElementById("4_6").value;
    input6[5] = document.getElementById("5_6").value;
    input6[6] = document.getElementById("6_6").value;
    input6[7] = document.getElementById("7_6").value;
    input6[8] = document.getElementById("8_6").value;
    input6[9] = document.getElementById("9_6").value;
    input6[10] = document.getElementById("10_6").value;
    input6[11] = document.getElementById("11_6").value;
    input6[12] = document.getElementById("12_6").value;
    input6[13] = document.getElementById("13_6").value;
    input6[14] = document.getElementById("14_6").value;
        
    localStorage.setItem("datainput6", JSON.stringify(input6));
}
var output6 = [];
function output_6(){
      output6=JSON.parse(localStorage.getItem("datainput6"));

      document.getElementById("0_6").innerHTML = output6[0];
      document.getElementById("1_6").innerHTML = output6[1];
      document.getElementById("2_6").innerHTML = output6[2];
      document.getElementById("3_6").innerHTML = output6[3];
      document.getElementById("4_6").innerHTML = output6[4];
      document.getElementById("5_6").innerHTML = output6[5];
      document.getElementById("6_6").innerHTML = output6[6];
      document.getElementById("7_6").innerHTML = output6[7];
      document.getElementById("8_6").innerHTML = output6[8];
      document.getElementById("9_6").innerHTML = output6[9];
      document.getElementById("10_6").innerHTML = output6[10];
      document.getElementById("11_6").innerHTML = output6[11];
      document.getElementById("12_6").innerHTML = output6[12];
      document.getElementById("13_6").innerHTML = output6[13];
      document.getElementById("14_6").innerHTML = output6[14];
}
var input9=[];
function simpan9(){
	
 	input9[0] = document.getElementById("0_9").value;
 	input9[1] = document.getElementById("1_9").value;
	input9[2] = document.getElementById("2_9").value;
 	input9[3] = document.getElementById("3_9").value;
 	input9[4] = document.getElementById("4_9").value;
 	input9[5] = document.getElementById("5_9").value;
 	input9[6] = document.getElementById("6_9").value;
 	input9[7] = document.getElementById("7_9").value;
 	input9[8] = document.getElementById("8_9").value;
 	input9[9] = document.getElementById("9_9").value;
 	input9[10] = document.getElementById("10_9").value;
 	input9[11] = document.getElementById("11_9").value;
 	input9[12] = document.getElementById("12_9").value;
 	input9[13] = document.getElementById("13_9").value;
 	input9[14] = document.getElementById("14_9").value;
 	
 	localStorage.setItem("datainput9", JSON.stringify(input9));
}
var output9 = [];
function output_9(){
      output9=JSON.parse(localStorage.getItem("datainput9"));

      document.getElementById("0_9").innerHTML = output9[0];
      document.getElementById("1_9").innerHTML = output9[1];
      document.getElementById("2_9").innerHTML = output9[2];
      document.getElementById("3_9").innerHTML = output9[3];
      document.getElementById("4_9").innerHTML = output9[4];
      document.getElementById("5_9").innerHTML = output9[5];
      document.getElementById("6_9").innerHTML = output9[6];
      document.getElementById("7_9").innerHTML = output9[7];
      document.getElementById("8_9").innerHTML = output9[8];
      document.getElementById("9_9").innerHTML = output9[9];
      document.getElementById("10_9").innerHTML = output9[10];
      document.getElementById("11_9").innerHTML = output9[11];
      document.getElementById("12_9").innerHTML = output9[12];
      document.getElementById("13_9").innerHTML = output9[13];
      document.getElementById("14_9").innerHTML = output9[14];
}
var input10=[];
function simpan10(){
	
 	input10[0] = document.getElementById("0_10").value;
 	input10[1] = document.getElementById("1_10").value;
	input10[2] = document.getElementById("2_10").value;
 	input10[3] = document.getElementById("3_10").value;
 	input10[4] = document.getElementById("4_10").value;
 	input10[5] = document.getElementById("5_10").value;
 	input10[6] = document.getElementById("6_10").value;
 	input10[7] = document.getElementById("7_10").value;
 	input10[8] = document.getElementById("8_10").value;
 	input10[9] = document.getElementById("9_10").value;
 	input10[10] = document.getElementById("10_10").value;
 	input10[11] = document.getElementById("11_10").value;
 	input10[12] = document.getElementById("12_10").value;
 	input10[13] = document.getElementById("13_10").value;
 	input10[14] = document.getElementById("14_10").value;
 	
 	localStorage.setItem("datainput10", JSON.stringify(input10));
}
var output10 = [];
function output_10(){
      output10=JSON.parse(localStorage.getItem("datainput10"));

      document.getElementById("0_10").innerHTML = output10[0];
      document.getElementById("1_10").innerHTML = output10[1];
      document.getElementById("2_10").innerHTML = output10[2];
      document.getElementById("3_10").innerHTML = output10[3];
      document.getElementById("4_10").innerHTML = output10[4];
      document.getElementById("5_10").innerHTML = output10[5];
      document.getElementById("6_10").innerHTML = output10[6];
      document.getElementById("7_10").innerHTML = output10[7];
      document.getElementById("8_10").innerHTML = output10[8];
      document.getElementById("9_10").innerHTML = output10[9];
      document.getElementById("10_10").innerHTML = output10[10];
      document.getElementById("11_10").innerHTML = output10[11];
      document.getElementById("10_10").innerHTML = output10[10];
      document.getElementById("13_10").innerHTML = output10[13];
      document.getElementById("14_10").innerHTML = output10[14];
}








