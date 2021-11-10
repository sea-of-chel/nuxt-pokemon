//The mutations take the updated state from actions and sets them equal to the state.
//The empty arrays are not filled with pokemon data.

export const SET_POKEMON = (state, pokemonInfo) => {
  state.pokemonInfo = pokemonInfo;
};

export const SET_INDIVIDUAL = (state, individual) => {
  state.individual = individual;
};
