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
  const presidentName = associazione.president;

  assTags = "";
  associazione.tags.forEach((tag) => {
    const tagName = allTags[tag].name;
    assTags += `<span class="tag">${tagName}</span>`;
  });

  var assContacts = "";
  var assActions = "";

  if (associazione.contacts != null && associazione.contacts.length > 0) {
    associazione.contacts.forEach((contact) => {
      const contactType = contact.type;
      const contactGenerator = contactType != "social" ? contactTypes[contactType] : contactTypes.social[contact.platform];
      const contactInfo = mapJsonElement(contactGenerator, contact);

      assContacts += generateContactSpan(contactInfo);
      assActions += contactInfo.action ? generateContactAction(contactInfo) : "";
    });
  }

  var assAttachments = "";
  if (associazione.attachments != null && associazione.attachments.length > 0) {
    associazione.attachments.forEach((attachment) => {
      assAttachments += generateAttachment(attachment);
    });
  }

  assContactsElement = assContacts != "" ? `<h3 class="mt-6">Contatti</h3><div class="list-information">${assContacts}</div>` : "";
  assActionsElement = assActions != "" ? `<div class="btn-group mt-10">${assActions}</div>` : "";
  assAttachmentsElement = assAttachments != "" ? `<h3 class="mt-6">Allegati</h3><div class="list-information">${assAttachments}</div>` : "";

  return `<div class="card associazione-big">
              <div class="card-image">
                  <img src="${imgUrl}" alt="${assName}" />
              </div>
              <div class="card-content">
                  <h2>${assName}</h2>
                  <p>${assDescription}</p>
                  <p class="mt-3"><strong>Presidente</strong>: ${presidentName}</p>
                  <div class="tags-container mt-3">${assTags}</div>
                  ${assAttachmentsElement}
                  ${assContactsElement}
                  ${assActionsElement}
              </div>
          </div>`;
}

function generateContactSpan(contact) {
  const url = contact.url != null ? contact.url : null;
  const icon = contact.iconClass;
  const iconColor = contact.iconColor;
  var subtext = contact.subtext != null && contact.subtext != "" ? contact.subtext : null;

  var textElement = contact.text;
  if (url != null) {
    textElement = `<a href="${url}" target="_blank" rel="noopener noreferrer">${textElement}</a>`;
  }

  var subtextElement = "";
  if (subtext != null) {
    if (subtext.endsWith(" • ")) {
      subtext = subtext.substring(0, subtext.length - 3);
    }
    subtextElement = `<span class="subinfo">${subtext}</span>`;
  }

  return `<div class="info-element"><i class="${icon}" aria-hidden="true" style="color: ${iconColor}"></i><div class="flex flex-col">${textElement}${subtextElement}</div></div>`;
}

function generateContactAction(contact) {
  const url = contact.url != null && contact.url != "" ? contact.url : null;
  const actionText = contact.actionText;

  if (url != null) {
    return `<a href="${url}" role="button" class="button">${actionText}</a>`;
  }

  return "";
}

function generateAttachment(attachment) {
  const url = attachment.url && attachment.url != "" ? attachment.url : null;
  const attachmentName = attachment.name;

  if (url != null) {
    return `<div class="info-element"><i class="feather icon-paperclip" aria-hidden="true"></i><a href="${url}" target="_blank" rel="noopener noreferrer">${attachmentName}</a></div>`;
  }

  return "";
}

function createContributoCard(contributo) {
  const conName = contributo.name;
  const conDescription = contributo.description;
  const conFrom = contributo.from;
  const conAmount = contributo.amount;
  const conDate = formatDate(contributo.date);

  return `<div class="card event">
              <div class="card-content">
                  <h3 class="mb-4">${conName}</h3>
                  <p class="mb-5">${conDescription}</p>
                  <div class="info-element"><i class="far fa-calendar" aria-hidden="true"></i><span>${conDate}</span></div>
                  <div class="info-element"><i class="fas fa-arrow-right" aria-hidden="true"></i><span>${conFrom}</span></div>
                  <div class="info-element"><i class="fas fa-euro-sign" aria-hidden="true"></i><span>${conAmount}</span></div>
              </div>
          </div>`;
}
