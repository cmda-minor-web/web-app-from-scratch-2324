const renderHabitat = (habitat) => `
<li>${habitat.title}: ${
  habitat.value.startsWith("https") ? `<a href="${habitat.value}" target="_blank" rel="noopener noreferrer">Open ${habitat.title}</a>` : `${habitat.value}`
}</li>
`;

const renderHabitats = (habitats) => `
<ul>
${habitats.map(renderHabitat).join("")}
</ul>
`;

export const renderHabitatBox = (habitats) => `
<article id="habitats">
<h2>Habitats</h2>
<div id="habitat-container">
${renderHabitats(habitats)}
</div>
</article>
`;

export const setHabitats = (habitats) => {
  document.querySelector("#habitat-container").innerHTML =
    renderHabitats(habitats);
};
