/*Back-End(Logic)*/
var ping_pong = function(userInput) {
  for (var i = 1; i <= userInput; i++) {
    if ((i%15)===0) {
      $("#output").append("Ping-Pong!" + "<br>");
    }else if ((i%3)===0) {
      $("#output").append("Ping" + "<br>");
    }else if ((i%5)===0) {
      $("#output").append("Pong" + "<br>");
    }else {
      $("#output").append(i + "<br>");
    }
  }
}
/*Front-End(User Interface)*/
$(document).ready(function() {
   $("form#playtime").submit(function(event) {
         event.preventDefault();
         var userInput = parseInt($("#input").val());
         alert("Hey did you just say "+ userInput);
         ping_pong(userInput);
        });
});
