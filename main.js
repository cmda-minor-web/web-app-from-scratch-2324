// Styling
import '/assets/css/main.css'

// HTML assets
import {renderHeader} from '/assets/html/header.js'
import { renderProfilePicure, setProfilePicture } from './assets/html/profilePicture';
import {
  fillContent,
  renderInfoBox,
  setInfoBoxContent,
} from "./assets/html/infoBox";

// JS assets
import { getMyData } from "/assets/js/api.js";

// Render the app
document.querySelector("#app").innerHTML = `
  ${renderHeader()}
  <main>
    <div id="profileInfoContainer">
      ${renderProfilePicure()}
      ${renderInfoBox(fillContent())}
    </div>
  </main>
`;

// Load my json data in the app
const loadMyData = async () => {
  const data = await getMyData()
  setProfilePicture(data.avatar)
  setInfoBoxContent(fillContent(data.name, data.age, data.description));
}

loadMyData();
