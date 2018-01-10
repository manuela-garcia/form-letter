$(document).ready(function() {
  $("#form").submit(function(event) {
    var personInput = $("input#person").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();



    $(".person").text(personInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);





    $("#story").show();
    event.preventDefault();
  });











});
