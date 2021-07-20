var allTags;
var contactTypes;

$.ajax({
  url: baseSito + "associazioni.json",
  type: "GET",
  success: function (data) {
    allTags = data.tags;
    contactTypes = data.contactTypes;

    data.associazioni.forEach(associazione => {
      const assElement = createAssociazioneCard(associazione);
      
      $("#associazioni").append(assElement);
    });
  },
});
