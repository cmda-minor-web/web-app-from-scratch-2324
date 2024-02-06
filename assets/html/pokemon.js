import {loadingIndicator} from './loading.js'

const pokemonImg = (pokemon) => `
${pokemon?.image ? `<img src="${pokemon.image}" alt="${pokemon.name}" />` : loadingIndicator()}
`

export const renderPokemon = (pokemon) => `
<h3>${pokemon?.name ?? "Laden..."}</h3>
  ${pokemonImg(pokemon)}
  <p>${pokemon?.description ?? "Laden..."}</p>
`;

export const renderPokemonCard = (id) => `
<article id="pokemon-${id}" class="pokemon-card">
  ${renderPokemon()}
</article>
`;

export const setPokemonCard = (pokemon) => {
  document.querySelector(`#pokemon-${pokemon.id}`).innerHTML =
    renderPokemon(pokemon);
}