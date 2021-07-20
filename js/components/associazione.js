function createAssociazioneCard(associazione) {
  const sColorGradient = associazione.sGradient;
  const eColorGradient = associazione.eGradient;

  const imgUrl = associazione.logoUrl;

  const assID = associazione.id;
  const assName = associazione.name;
  const assUrl = baseSito + "associazioni/" + assID;

  var assTags = "";
  associazione.tags.forEach((tag) => {
    const tagName = allTags[tag].name;
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

function createAssociazioneFullCard(associazione) {
  const imgUrl = associazione.logoUrl;

  const assID = associazione.id;
  const assName = associazione.name;
  const assDescription = associazione.description;

  assTags = "";
  associazione.tags.forEach((tag) => {
    const tagName = allTags[tag].name;
    assTags += `<span class="tag">${tagName}</span>`;
  });

  var assContacts = "";
  var assActions = "";

  associazione.contacts.forEach((contact) => {
    const contactType = contact.type;
    const contactGenerator = contactType != "social" ? contactTypes[contactType] : contactTypes.social[contact.platform];
    const contactInfo = mapJsonElement(contactGenerator, contact);

    assContacts += generateContactSpan(contactInfo);
    assActions += contactInfo.action ? generateContactAction(contactInfo) : "";
  });

  return `<div class="card associazione-big">
              <div class="card-image">
                  <img src="${imgUrl}" alt="${assName}" />
              </div>
              <div class="card-content">
                  <h2>${assName}</h2>
                  <div class="tags-container">${assTags}</div>
                  <p>${assDescription}</p>
                  <div class="list-information">${assContacts}</div>
                  <div class="btn-group">${assActions}</div>
              </div>
          </div>`;
}

function generateContactSpan(contact) {
  const url = contact.url != null ? contact.url : null;
  const icon = contact.icon;
  const subtext = contact.subtext != null && contact.subtext != "" ? contact.subtext : null;

  var textElement = contact.text;
  if (url != null) {
    textElement = `<a href="${url}" target="_blank" rel="noopener noreferrer">${textElement}</a>`;
  }

  if (subtext != null) {
    subtextElement = `<span>${subtext}</span>`;
  }

  return `<div class="location"><span>${icon}</span>${textElement}${subtextElement}</div>`;
}

function generateContactAction(contact) {
  const url = contact.url != null ? contact.url : null;
  const actionText = contact.actionText;

  if (url != null) {
    return `<a href="${url}" role="button" class="button">${actionText}</a>`;
  }

  return "";
}
