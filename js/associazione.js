var allTags;
var contactTypes;

function listAssociazione(assID) {
  const spinner = spinnerElement.clone();
  $("#associazione").empty().append(spinner);

  $.ajax({
    url: baseSito + "associazioni.json",
    type: "GET",
    complete: function () {
      $("#associazione .spinner").remove();
    },
    success: function (data) {
      allTags = data.tags;
      contactTypes = data.contactTypes;

      if (data.associazioni.hasOwnProperty(assID)) {
        const associazione = data.associazioni[assID];

        const assElement = createAssociazioneFullCard(associazione);
        $("#associazione").empty().append("<h1>Scheda associazione</h1>").append(assElement);

        if (associazione.contributi != null && associazione.contributi.length > 0) {
          $("#contributi").empty().append("<h2 class='mt-16 mb-10'>Contributi da P.A.</h2><div class='events-container'></div>");

          associazione.contributi.forEach((contributo) => {
            const contributoElement = createContributoCard(contributo);

            $("#contributi .events-container").append(contributoElement);
          });
        }
      }
    },
  });
}

var assID = getTokens("/associazioni/")[0];
listAssociazione(assID);
