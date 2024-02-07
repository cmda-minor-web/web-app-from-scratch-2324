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
import { fillTabs, renderTabList, setTab } from "./assets/js/tabs";

// Render the app
document.querySelector("#app").innerHTML = `
  ${renderHeader()}
  <main>
    ${renderTabList(fillTabs())}
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

document.querySelectorAll('[role="tab"]').forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const tabId = e.target.getAttribute("id").split("-")[1];
    setTab(tabId);
  });
});

// Load my json data in the app
const loadMyData = async () => {
  const data = await fetchMyData()
  setProfilePicture(data.avatar)
  setInfoBoxContent(fillContent(data));
  setStats(data.stats);
  setHabitats(data.habitats);
}

loadMyData();
