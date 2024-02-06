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
    {title: 'Name', value: trainerName ?? 'Loading...'},
    {title: 'Age', value: age ?? 'Loading...'},
    {title: 'Description', value: description ?? 'Loading...'}
  ]
}

export const setInfoBoxContent = (content) => {
  document.querySelector("#infoBox").innerHTML = renderContent(content)
}