import axios from "axios";
//getPokemon is calling the /pokemon/ endpoint, however, the data I need is
//nested within another endpoint. To solve this, I create a variable called promises which
//iterates through the endpoint using the .map method and returns the URLs of the pokemon.
//I then use promise.all method to resolve the the promises variable as an array.
export const getPokemon = ({ commit }) => {
  axios.get("https://pokeapi.co/api/v2/pokemon/").then(response => {
    let promises = response.data.results.map(result => {
      return axios.get(result.url);
    });
    Promise.all(promises).then(response => {
      commit("SET_POKEMON", response);
      //   console.log(response);
    });
  });
};

//getIndividual takes commit argument and pokemonID payload as an argument.
//PokemonID is set to a parameter inside the API get call.
//the data response is them committed to the SET_INDIVIDUAL mutation.
export const getIndividual = ({ commit }, pokemonId) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => {
    commit("SET_INDIVIDUAL", response.data);
    console.log(response.data);
  });
};
