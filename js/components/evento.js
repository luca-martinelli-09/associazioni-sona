function createEventCard(evento) {
  const eventLocation = evento.location;
  const eventLocationUrl = "https://www.google.com/maps/search/" + encodeURIComponent(evento.location);
  const startEventDate = evento.start.dateTime != undefined ? new Date(evento.start.dateTime) : new Date(evento.start.date);
  const endEventDate = evento.end.dateTime != undefined ? new Date(evento.end.dateTime) : new Date(evento.end.date);
  const isDateTime = evento.end.dateTime != undefined;
  const eventTitle = evento.summary;
  var eventDescription = evento.description;
  const eventUrl = evento.htmlLink;

  if (eventDescription != undefined && eventDescription != null && eventDescription.length > 300) {
    eventDescription = stripTags(eventDescription).substring(0, 200) + "...";
  }

  const dateElement = formatDateRange(startEventDate, endEventDate, isDateTime);

  var eventoImg = null;

  if (evento.attachments != undefined && evento.attachments != null && evento.attachments.length > 0) {
    eventoImg = getImgFromAttachments(evento.attachments);
  }

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
                        <span class="info-element"><i class="feather icon-clock time" aria-hidden="true"></i>${dateElement}</span>
                    </div>
                    <a href="${eventUrl}" role="button" class="button m-0">Pi?? informazioni</a>
                </div>
            </div>`;
}

function getImgFromAttachments(attachments) {
  fileUrl = null;

  attachments.forEach((attachment) => {
    if (attachment.mimeType != undefined && attachment.mimeType != null && attachment.mimeType.indexOf("image") === 0) {
      fileUrl = "https://drive.google.com/uc?id=" + attachment.fileId;
    }
  });

  return fileUrl;
}
