import {renderPokemonCard, setPokemonCard} from './pokemon.js'
import { fetchPokemon } from './api.js';

const loadPokemon = async (id) => {
  const pokemon = await fetchPokemon(id)
  setPokemonCard(pokemon)
}

const renderPokemon = (id) => {
  loadPokemon(id)
  return renderPokemonCard(id)
}

const renderTeam = (team) => `
<h2>My Team</h2>
<div id="team-pokemon-box">
${team.map((id) => renderPokemon(id)).join("")}
</div>
`;

export const renderTeamBox = (team) => `
<section id="team">
${renderTeam(team)}
</section>
`