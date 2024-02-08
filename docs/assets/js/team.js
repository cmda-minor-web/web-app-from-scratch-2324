import { fetchPokemon } from "api";

const setPokemon = (pokemon) => {
  const card = document.createElement("article");
  card.classList.add("pokemon-card");
  card.appendChild(document.createElement("h3")).textContent = pokemon.name;

  const img = document.createElement("img");
  img.src = pokemon.image;
  img.alt = pokemon.name;
  card.appendChild(img);

  card.appendChild(document.createElement("p")).textContent =
    pokemon.description;

  const container = document.getElementById("team-pokemon-box");
  container.replaceChild(
    card,
    document.querySelector("article.pokemon-card.skeleton")
  );
};

const loadPokemon = async (id) => {
  const pokemon = await fetchPokemon(id);
  setPokemon(pokemon);
};

const setLoadingTeam = (length) => {
  const container = document.getElementById("team-pokemon-box");
  container.innerHTML = "";
  const cardTemplate = document.getElementById("card-template");
  for (let i = 0; i < length; i++) {
    container.append(cardTemplate.content.cloneNode(true));
  }
};

export const loadTeam = (team) => {
  setLoadingTeam(team.length);
  team.forEach((id) => loadPokemon(id));
};
