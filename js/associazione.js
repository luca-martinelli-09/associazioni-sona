var allTags;
var contactTypes;

var assID = getTokens("/associazioni/")[0];

$.ajax({
  url: baseSito + "associazioni.json",
  type: "GET",
  success: function (data) {
    allTags = data.tags;
    contactTypes = data.contactTypes;

    if (data.associazioni.hasOwnProperty(assID)) {
      const assElement = createAssociazioneFullCard(data.associazioni[assID]);
      $("#associazione").empty().append(assElement);
    }
  },
});
