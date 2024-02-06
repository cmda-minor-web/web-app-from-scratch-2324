const renderInfoItem = (title, value) => `<li>${title}: ${value}</li>`

const renderContent = (content) => `
<h2>Info</h2>
<ul>
${content.map(({ title, value }) => renderInfoItem(title, value)).join("")}
</ul>
`;

export const renderInfoBox = (content) => `
<article id="infoBox">
${renderContent(content)}
</article>
`;

export const fillContent = (trainerName, age, description) => {
  return [
    {title: 'Naam', value: trainerName ?? 'Laden...'},
    {title: 'Leeftijd', value: age ?? 'Laden...'},
    {title: 'Omschrijving', value: description ?? 'Laden...'}
  ]
}

export const setInfoBoxContent = (content) => {
  document.querySelector("#infoBox").innerHTML = renderContent(content)
}