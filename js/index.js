var baseSito = "./";
const ONE_DAY = 24 * 60 * 60 * 1000;

function getTokens(from) {
  if (location.href.lastIndexOf(from) >= 0) {
    return location.href
      .substr(location.href.lastIndexOf(from) + from.length)
      .split("/")
      .filter((token) => token.length > 0);
  }
  return null;
}

function mapJsonElement(generator, element) {
  var generated = { ...element };

  for ([key, val] of Object.entries(generator)) {
    if (!element.hasOwnProperty(key)) {
      generated[key] =
        val != null && val != ""
          ? val.replace(/\$[a-zA-Z0-9-_]+\$/g, function (match) {
              const elementKey = match.replace(/\$/g, "");
              if (generated.hasOwnProperty(elementKey)) {
                return encodeUriComponent(generated[elementKey]);
              }
              return "";
            })
          : null;
    }
  }

  return generated;
}

function formatDate(dateString, isDate = false) {
  const months = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

  const date = isDate == false ? new Date(dateString) : dateString;

  return [date.getDate(), months[date.getMonth()], date.getFullYear()].join(" ");
}

function formatTime(dateString, isDate = false) {
  const date = isDate == false ? new Date(dateString) : dateString;

  return [date.getHours(), date.getMinutes()].join(":");
}

function formatDateTime(dateString, isDate = false) {
  const date = isDate == false ? new Date(dateString) : dateString;

  return [formatDate(date, true), formatTime(date, true)].join(", ");
}

function formatDateRange(startDate, endDate, withTime = true) {
  if (endDate - startDate <= ONE_DAY) {
    if (withTime) {
      return [formatDate(startDate, true), [formatTime(startDate), formatTime(endDate)].join("-")].join(", ");
    } else {
      return formatDate(startDate, true);
    }
  } else {
    if (withTime) {
      return [formatDateTime(startDate, true), formatDateTime(endDate - ONE_DAY, true)].join(" - ");
    } else {
      return [formatDate(startDate, true), formatDate(endDate - ONE_DAY, true)].join(" - ");
    }
  }
}

$(".menu-toggle").click(function (e) {
  e.preventDefault();

  $("#" + $(this).data("ref")).toggleClass("menu-opened");
  $(this).toggleClass("menu-opened");
  $("body").toggleClass("overflow-hidden");
});

$("#nav").click(function () {
  $(".menu-toggle[data-ref='" + $(this).attr("id") + "']").removeClass("menu-opened");
  $(this).removeClass("menu-opened");
  $("body").removeClass("overflow-hidden");
});
