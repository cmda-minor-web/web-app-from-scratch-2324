export const setStats = (stats) => {
  const container = document.getElementById("stats-container");
  container.innerHTML = "";
  stats.forEach((stat) => {
    const label = document.createElement("label");
    label.htmlFor = stat.title.toLowerCase();
    label.textContent = `${stat.title}:`;
    const meter = document.createElement("meter");
    meter.id = stat.title.toLowerCase();
    meter.value = stat.value;
    meter.max = 100;
    meter.textContent = `${stat.value}%`;
    container.appendChild(document.createElement("div")).append(label, meter);
  });
};
