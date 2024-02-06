const renderInfoItem = (title, value) => `<p>${title}: ${value}</p>`

const renderContent = (content) => `
<h2>Info</h2>
${content.map(({ title, value }) => renderInfoItem(title, value)).join("")}
`

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