const renderInfoItem = (title, value) => `<li>${title}: ${value}</li>`

const renderContent = (content) => `
<h2>Trainer Info</h2>
<ul>
${content.map(({ title, value }) => renderInfoItem(title, value)).join("")}
</ul>
`;

export const renderInfoBox = (content) => `
<article id="infoBox">
${renderContent(content)}
</article>
`;

export const fillContent = (info) => {
  return [
    {title: 'Name', value: info?.name ?? 'Loading...'},
    {title: 'Age', value: info?.age ?? 'Loading...'},
    {title: 'Strengths', value: info?.strengths?.join(', ') ?? 'Loading...'},
    {title: 'Weaknesses', value: info?.weaknesses?.join(', ') ?? 'Loading...'},
    {title: 'Description', value: info?.description ?? 'Loading...'},
  ]
}

export const setInfoBoxContent = (content) => {
  document.querySelector("#infoBox").innerHTML = renderContent(content)
}