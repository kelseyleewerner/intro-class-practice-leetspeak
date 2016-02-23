var leetSpeak = function(leet) {
  if (leet === "e") {
  return true;
} else {
  return false;
}
};


$(document).ready(function() {
  $("form#leetSpeak").submit(function(event) {
    var leet = $("input#inputText").val();
    var result = leetSpeak(leet);

    if (result === true) {
      $(".answer").text("3");
    }

    else {
      $(".answer").text("");
    }

    $("#result").show();
    event.preventDefault();
  });
});
