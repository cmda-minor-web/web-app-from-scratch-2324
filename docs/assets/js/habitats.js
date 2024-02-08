const parseValue = (title, value) => {
  if (value.startsWith("https")) {
    return `<a href="${value}" target="_blank" rel="noopener noreferrer">Open ${title}</a>`;
  }
  return value;
};

export const setHabitats = (habitats) => {
  const list = document.createElement("ul");
  habitats.forEach(({ title, value }) => {
    list.appendChild(
      document.createElement("li")
    ).innerHTML = `${title}: ${parseValue(title, value)}`;
  });
  const container = document.getElementById("habitat-container");
  container.innerHTML = "";
  container.appendChild(list);
};
