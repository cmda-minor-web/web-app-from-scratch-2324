const renderTab = (tab) => `
<button id="tab-${tab.id}" type="button" role="tab" aria-selected="${tab.active}" aria-controls="${tab.box}">
${tab.title}
</button>
`;

const renderTabs = (tabs) => `
${tabs.map(renderTab).join('')}
`;

export const renderTabList = (tabs) => `
<div role="tablist" aria-labelledby="title">
${renderTabs(tabs)}
</div>
`;

export const fillTabs = (active) => {
  return [
    {
      id: 1,
      title: "Profile",
      active: !active || active === "profile",
      box: "profileInfoContainer",
    },
    {
      id: 2,
      title: "Stats",
      active: active === "stats",
      box: "stats",
    },
    {
      id: 3,
      title: "Habitats",
      active: active === "habitats",
      box: "habitats",
    },
    { id: 4, title: "Team", active: active === "team", box: "team" },
  ];
}

export const setTab = (id) => {
const tabs = document.querySelectorAll('[role="tab"]');
tabs.forEach((tab) => {
  const tabId = tab.getAttribute("id").split("-")[1];
  tab.setAttribute("aria-selected", (id === tabId).toString());

  const controlsId = tab.getAttribute("aria-controls");
  const controls = document.getElementById(controlsId);
  controls.classList.toggle("active-tab", id === tabId);
});
}
