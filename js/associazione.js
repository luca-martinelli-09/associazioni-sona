$.ajax({
  url: baseSito + "associazioni.json",
  type: "GET",
  data: { id: 1234 },
  success: function (result) {
    $("div#risposta").html(result);
  },
  error: function (richiesta, stato, errori) {
    $("div#risposta").html("Chiamata fallita:" + stato + " " + errori);
  },
});
