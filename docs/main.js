// JS assets
import { fetchMyData } from "api";
import { setInfo } from "info";
import { setProfile } from "profile";
import { setStats } from "stats";
import { setHabitats } from "habitats";
import { loadTeam } from "team";
import { initTabs } from "tabs";

// Load my json data in the app
const loadMyData = async () => {
  const data = await fetchMyData();
  setProfile(data.avatar);
  setInfo([
    { title: "Name", value: data.name },
    { title: "Age", value: data.age },
    { title: "Strengths", value: data.strengths.join(", ") },
    {
      title: "Weaknesses",
      value: data.weaknesses.join(", "),
    },
    { title: "Description", value: data.description },
  ]);
  setStats(data.stats);
  setHabitats(data.habitats);
};

loadMyData();
loadTeam([1, 2, 3, 4, 5, 6]);
initTabs();
