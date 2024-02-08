const setTab = (id) => {
  const tabs = document.querySelectorAll('[role="tab"]');
  tabs.forEach((tab) => {
    const tabId = tab.getAttribute("id").split("-")[1];
    tab.setAttribute("aria-selected", (id === tabId).toString());

    const controlsId = tab.getAttribute("aria-controls");
    const controls = document.getElementById(controlsId);
    controls.classList.toggle("active-tab", id === tabId);
  });
};

export const initTabs = () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  tabs.forEach((tab) => {
    const tabId = tab.getAttribute("id").split("-")[1];
    tab.addEventListener("click", () => {
      setTab(tabId);
    });
  });
};
