function createEventCard(evento) {
  const eventLocation = evento.location;
  const eventLocationUrl = "https://www.google.com/maps/search/" + encodeURIComponent(evento.location);
  const startEventDate = evento.start.dateTime;
  const endEventDate = evento.end.dateTime;
  const eventTitle = evento.summary;
  const eventDescription = evento.description;
  const eventUrl = evento.htmlLink;
  const eventoImg = evento.imgUrl;

  const imgElement = eventoImg != null ? `<div class="card-image"><img src="${eventoImg}" alt="${eventTitle}" /></div>` : "";
  const descriptionElement = eventDescription != undefined && eventDescription != null ? `<p>${eventDescription}</p>` : "";
  const locationElement =
    eventLocation != undefined && eventLocation != null
      ? `<span class="info-element"><i class="feather icon-map-pin location" aria-hidden="true"></i><a href="${eventLocationUrl}" target="_blank" rel="noopener noreferrer">${eventLocation}</a></span>`
      : "";

  return `<div class="card event">
                ${imgElement}
                <div class="card-content">
                    <h2>${eventTitle}</h2>
                    ${descriptionElement}
                    <div class="list-information">
                        ${locationElement}
                        <span class="info-element"><i class="feather icon-clock time" aria-hidden="true"></i>${startEventDate}-${endEventDate}</span>
                    </div>
                    <a href="${eventUrl}" role="button" class="button m-0">Più informazioni</a>
                </div>
            </div>`;
}
