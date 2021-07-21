function createEventCard(evento) {
    const eventLocation = evento.location;
    const eventLocationUrl = "https://www.google.com/maps/search/" + encodeURIComponent(evento.location);
    const startEventDate = evento.start.dateTime;
    const endEventDate = evento.end.dateTime;
    const eventTitle = evento.summary;
    const eventDescription = evento.description;
    const eventUrl = evento.htmlLink;
    const eventoImg = ""; // evento.imgUrl;

    return `<div class="card event">
                <div class="card-image">
                    <img src="${eventoImg}" alt="${eventTitle}" />
                </div>
                <div class="card-content">
                    <h2>${eventTitle}</h2>
                    <p>${eventDescription}</p>
                    <div class="list-information">
                        <span class="info-element"><i class="feather icon-map-pin location" aria-hidden="true"></i><a href="${eventLocationUrl}">${eventLocation}</a></span>
                        <span class="info-element"><i class="feather icon-clock time" aria-hidden="true"></i>${startEventDate}-${endEventDate}</span>
                    </div>
                    <a href="${eventUrl}" role="button" class="button m-0">Più informazioni</a>
                </div>
            </div>`;
}