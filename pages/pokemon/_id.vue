<template>
  <div class="individual-wrapper">
    <!-- since data from api is asynchronous, I use v-if to determine if there is content in the array.
       If there is none, "loading..." will appear, when the data is ready, "loading..." will dissapear
       and the pokemon data it will appear. -->
    <div class="individual-container" v-if="individual.length === 0">
      loading...
    </div>
    <!-- calling data by accessing the individual funtion in the computed property -->
    <div class="individual-container" v-else>
      <div><nuxt-link to="/">< Back</nuxt-link></div>
      <p><strong>Name:</strong> {{ individual.name }}</p>
      <p><strong>Height:</strong> {{ individual.height }}</p>
      <p><strong>Weight:</strong> {{ individual.weight }}</p>
      <p>
        <strong>Moves:</strong> {{ individual.moves[0].move.name }},
        {{ individual.moves[1].move.name }},
        {{ individual.moves[2].move.name }},
      </p>
      <img :src="individual.sprites.front_default" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],

  computed: {
    //calling the state as a function inside
    //the computed property so I can use it directly in <template>.
    individual() {
      return this.$store.state.individual;
    }
  },

  created() {
    //I am sending the id prop from the nuxt link paramater
    //as a payload to determine which pokemon data to call from the api.
    //since this page is dynamic, prop id will take on whatever is
    //given to the nuxt-link paramter, which will be the pokemon's name.
    this.$store.dispatch("getIndividual", this.$route.params.id);
  }
};
</script>
<style lang="scss" scoped>
.individual-wrapper {
  padding: 30px;

  .individual-container {
    max-width: 300px;
    margin: auto;
    background: white;
    padding: 15px;
  }
}
</style>
