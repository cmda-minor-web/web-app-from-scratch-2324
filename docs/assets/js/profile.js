const renderImage = (url) => `<img src="${url}" alt="Profielfoto" />`;

export const setProfile = (src) => {
  const container = document.getElementById("profilePicture");
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Profielfoto";
  container.innerHTML = "";
  container.appendChild(img);
};
