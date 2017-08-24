$(document).ready(function(){

  getQuotes();
  
  function getQuotes(){

    var url="http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
    $.getJSON(url, function(data){
      
      $("#quote").html("'"+data.quoteText+"'");
      $("#author").html("-"+data.quoteAuthor);
      
      //console.log(data);
    });
  };
  
  $("#newQuote").on("click", function(){
    getQuotes();
  });
  
});