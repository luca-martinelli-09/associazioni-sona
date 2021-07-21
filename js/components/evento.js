function createEventCard(evento) {
    const eventLocation = evento.location;
    const eventLocationUrl = evento.location.url;
    const startEventDate = evento.date;
    const endEventDate = evento.date;
    const eventTitle = evento.title;
    const eventDescription = evento.description;
    const eventUrl = evento.url;
    const eventoImg = evento.imgUrl;

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