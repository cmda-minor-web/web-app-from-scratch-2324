// Styling
import '/assets/css/main.css'
import '/assets/css/loading.css'

// HTML assets
import {renderHeader} from '/assets/html/header.js'
import { renderProfilePicure, setProfilePicture } from './assets/html/profilePicture';
import {
  fillContent,
  renderInfoBox,
  setInfoBoxContent,
} from "./assets/html/infoBox";
import { renderTeamBox } from "/assets/html/team";

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
    ${renderTeamBox([1, 2, 3, 4, 5, 6])}
  </main>
`;

// Load my json data in the app
const loadMyData = async () => {
  const data = await getMyData()
  setProfilePicture(data.avatar)
  setInfoBoxContent(fillContent(data.name, data.age, data.description));
}

loadMyData();
