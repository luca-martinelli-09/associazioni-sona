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
    success: function (data) {},
  });
}

listEvents(4, new Date().toISOString());
