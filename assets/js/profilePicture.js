import {loadingIndicator} from './loading'

const renderImage = (url) => `${
  url
    ? `<img src="${url}" alt="Profielfoto" />`
    : loadingIndicator()
}`;

export const renderProfilePicure = (url) => `
<div id="profilePicture">
${renderImage(url)}
</div>
`;

export const setProfilePicture = (url) => {
  document.querySelector("#profilePicture").innerHTML = renderImage(url);
}