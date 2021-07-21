const apiKey = "AIzaSyDsLKD2jTSOb7Ba6CWYVeGmNP0ypcFyjBk";
const calendarId = "corpobandisticodisona@gmail.com";

function listEvents(maxResults = null, timeMin = null, timeMax = null) {
  const maxResultsParam = maxResults != null ? { maxResults: maxResults } : {};
  const timeMaxParam = timeMax != null ? { timeMax: timeMax } : {};
  const timeMinParam = timeMin != null ? { timeMin: timeMin } : {};

  $.ajax({
    url: "https://www.googleapis.com/calendar/v3/calendars/" + calendarId + "/events",
    data: $.param({ key: apiKey, ...maxResultsParam, ...timeMaxParam, ...timeMinParam }),
    type: "GET",
    success: function (data) {
      const eventi = data.items;

      $("#eventi").empty();

      if (eventi.length > 0) {
        eventi.forEach((evento) => {
          const eventoElement = createEventCard(evento);

          $("#eventi").append(eventoElement);
        });
      } else {
        $("#eventi").append("<div class='message warning'>Sembra che non ci siano eventi programmati 😢</div>");
      }
    },
  });
}

listEvents(4, new Date().toISOString());
