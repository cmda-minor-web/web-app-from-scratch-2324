const renderStat = (stat) => `
<div>
<label for="${stat.title.toLowerCase()}">${stat.title}:</label>
<meter id="${stat.title.toLowerCase()}" value="${
  stat.value
}" max="100">${stat.value}%</meter>
</div>
`;

const renderStats = (stats) => `
${stats.map(renderStat).join('')}
`

export const renderStatsBox = (stats) => `
<article id="stats">
<h2>Stats</h2>
<div id="stats-container">
${renderStats(stats)}
</div>
</article>
`;

export const setStats = (stats) => {
  document.querySelector('#stats-container').innerHTML = renderStats(stats)
}