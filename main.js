// Styling
import '/assets/css/main.css'

// JS assets
import {renderHeader} from '/assets/js/header'
import { renderProfilePicure, setProfilePicture } from './assets/js/profilePicture';
import {
  fillContent,
  renderInfoBox,
  setInfoBoxContent,
} from "./assets/js/infoBox";
import { renderTeamBox } from "/assets/js/team";
import { fetchMyData } from "/assets/js/api";
import { renderStatsBox, setStats } from './assets/js/stats';
import { renderHabitatBox, setHabitats } from './assets/js/habitats';

// Render the app
document.querySelector("#app").innerHTML = `
  ${renderHeader()}
  <main>
    <div id="profileInfoContainer">
      ${renderProfilePicure()}
      ${renderInfoBox(fillContent())}
    </div>
    <div id="statsHabitatsContainer">
      ${renderStatsBox([])}
      ${renderHabitatBox([])}
    </div>
    ${renderTeamBox([1, 2, 3, 4, 5, 6])}
  </main>
`;

// Load my json data in the app
const loadMyData = async () => {
  const data = await fetchMyData()
  setProfilePicture(data.avatar)
  setInfoBoxContent(fillContent(data));
  setStats(data.stats);
  setHabitats(data.habitats);
}

loadMyData();
