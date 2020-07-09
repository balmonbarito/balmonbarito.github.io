function tabel(){
  // Try edit message
  var yoman =[];
  var label =[];
  var bep = [];
  var tabel="";
  var cek="";
  var nomer=[];
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1VIjn_SHSVQHRJW-pce3_X1ZfIfsQ1mo9SQrJMyOdatU/1/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = 24; j<yoman.length; j++){
      if(yoman[j]!==""){
          label.push(yoman[j]);
      }
    }
    for(var i = 0; i <(label.length/24); i++){
      var lop = i*24;
      tabel += '<tr><th scope="row">'+ (i+1) +'</th>';
      for (var j=lop; j<(lop+4); j++){
        tabel += '<td>'+ label[j] + '</td>';

      }
      tabel += '<td><button type="button" class="btn btn-info btn-sm" onclick="mode(this.id);"'+ 'id= "tombol'+ (i+1) +'"' +'>LH05</button></td></tr>';
    }
    
    var hasil = document.getElementById('outputtabel');
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
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1VIjn_SHSVQHRJW-pce3_X1ZfIfsQ1mo9SQrJMyOdatU/1/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
          yoman.push(gan[i].content.$t); 
      } 
    for(var j = 24; j<yoman.length; j++){
      if(yoman[j]!==""){
          label.push(yoman[j]);
      }
    }
    for(var k = 1; k<(label.length/24)+1; k++){
      if(clicked == "tombol"+k){
        var mesin = label[(k*24)-24];
        document.getElementById('mesin').innerHTML = mesin;
      }
    }
  });
  modal.style.display = "block";

}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}