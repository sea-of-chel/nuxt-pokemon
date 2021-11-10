<template>
  <div class="card-list-wrapper">
    <div class="card-list-container">
      <p class="subhead">Pokemon cards</p>
      <h1>Gotta catch 'em all</h1>
      <!-- I am looping through the CardItem component which is pulling data
       from the pokemons function called in computed.-->
      <div class="cards">
        <card-item
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CardItem from "./CardItem";
export default {
  components: {
    CardItem
  },

  computed: {
    //I created a function which returns the pokemonInfo state array from the Vuex store.
    //I apply a filter method to the array and return pokemon whos name match the string
    pokemons() {
      return this.$store.state.pokemonInfo.filter(function(pokemon) {
        return (
          pokemon.data.name === "charmander" ||
          pokemon.data.name === "bulbasaur" ||
          pokemon.data.name === "squirtle"
        );
      });
    }
  },

  mounted() {
    //I am calling the getPokemon function from Vuex actions which contains the API request.
    this.$store.dispatch("getPokemon");
  }
};
</script>
<style lang="scss" scoped>
.card-list-wrapper {
  margin: auto;

  .card-list-container {
    display: flex;
    flex-direction: column;
    max-width: 1240px;
    margin: auto;
    padding: 40px 20px;

    .subhead {
      font-weight: 900;
      font-size: 12px;
      text-transform: uppercase;
      line-height: 12px;
      margin-bottom: 20px;
    }

    .cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      @media screen and (min-width: 767px) {
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }
}
</style>
