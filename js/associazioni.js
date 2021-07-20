var allTags;
var contactTypes;

$.ajax({
  url: baseSito + "associazioni.json",
  type: "GET",
  success: function (data) {
    allTags = data.tags;
    contactTypes = data.contactTypes;

    for (const [assID, associazione] of Object.entries(data.associazioni)) {
      const assElement = createAssociazioneCard(associazione);

      $("#associazioni").empty().append(assElement);
    }
  },
});
