import placeholder from '/assets/img/profile_placeholder.png'

export const renderProfilePicure = (url) => `
<div>
<img id="profilePicture" src="${url ?? placeholder}" alt="Profielfoto" />
</div>
`;

export const setProfilePicture = (url) => {
  document.querySelector('#profilePicture').setAttribute('src', url)
}