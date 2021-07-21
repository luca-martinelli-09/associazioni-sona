var baseSito = "./";

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
      generated[key] = val != null && val != "" ? val.replace(/\$[a-zA-Z0-9-_]+\$/g, function (match) {
        const elementKey = match.replace(/\$/g, "");
        if (generated.hasOwnProperty(elementKey)) {
          return encodeUriComponent(generated[elementKey]);
        }
        return "";
      }) : null;
    }
  }

  return generated;
}

function formatDate(dateString) {
  const months = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

  const date = new Date(dateString);

  return [date.getDate(), months[date.getMonth()], date.getFullYear()].join(" ");
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
