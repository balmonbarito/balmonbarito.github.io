$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function logins(){
  mode();
  cp= new Date().getTime();
  localStorage.setItem("cp", JSON.stringify(cp));
  var $form = $('#myInput'),
  url = 'https://script.google.com/macros/s/AKfycbxNi1_qHIJp4Q7-h3qt711LizJYFUfA3pAINA7gpk3zcJxN9gg/exec'
  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serialize()
  })
  setTimeout(function(){
    redir();
  }, 1500 );
  
}
function redir(){
  var yoman =[];
  var label =[];
  var kolom = 11;
  //get data from google sheets
  $.getJSON("https://spreadsheets.google.com/feeds/cells/1mPy5mL6vN86HA7yMthPo4PR1CXdFDd8bFTjvv6P0suA/7/public/basic?alt=json" ,function (data){
    var gan = data.feed.entry;
    for (var i = 0; i<gan.length; i++) {
      yoman.push(gan[i].content.$t); 
    } 
    window.location.replace(yoman[11]);
  })
}








