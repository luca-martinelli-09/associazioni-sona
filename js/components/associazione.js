function createAssociazioneCard(associazione) {
    sColorGradient = associazione.sGradient;
    eColorGradient = associazione.eGradient;

    imgUrl = associazione.logoUrl;

    assID = associazione.id;
    assName = associazione.name;
    assUrl = baseSito + "associazione/" + assID;

    assTags = "";
    associazione.tags.forEach((tag) => {
        tagName = allTags[tag].name;
        assTags += `<span class="tag">${tagName}</span>`;
    });

    return `<a class="card associazione" href="${assUrl}"
                style="--s-color: ${sColorGradient};--e-color: ${eColorGradient};">
                <div class="card-image">
                    <img src="${imgUrl}" alt="${assName}" />
                </div>
                <div class="card-content">
                    <div class="tags-container">${assTags}</div>
                    <h3>${assName}</h3>
                    <button class="btn-mini">Più informazioni</button>
                </div>
            </a>`;
}

function createAssociazioneFullCard(associazione) {}