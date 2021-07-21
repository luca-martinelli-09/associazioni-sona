var allTags;
var contactTypes;

function listAssociazioni() {
  const spinner = spinnerElement.clone();
  $("#associazioni").empty().append(spinner);

  $.ajax({
    url: baseSito + "associazioni.json",
    type: "GET",
    complete: function () {
      $("#associazioni .spinner").remove();
    },
    success: function (data) {
      allTags = data.tags;
      contactTypes = data.contactTypes;

      $("#associazioni").empty();
      for (const [assID, associazione] of Object.entries(data.associazioni)) {
        const assElement = createAssociazioneCard(associazione);

        $("#associazioni").append(assElement);
      }
    },
  });
}

listAssociazioni();
