<template>
  <div class="card-item-wrapper">
    <!-- I am using the pokemon name from the api to
       load the name of the pokemon image from the assets directory -->
    <img :src="require(`~/assets/images/${pokemon.data.name}.png`)" />
    <div class="content-body">
      <h2>{{ pokemon.data.name }}</h2>
      <p>
        <strong>Abilities:</strong>
        {{ pokemon.data.abilities[0].ability.name }},
        {{ pokemon.data.abilities[1].ability.name }}
      </p>
      <p><strong>Types:</strong> {{ pokemon.data.types[0].type.name }}</p>
      <p><strong>HP:</strong> {{ pokemon.data.stats[0].base_stat }}</p>
      <p><strong>Attack:</strong> {{ pokemon.data.stats[1].base_stat }}</p>
      <p><strong>Defense:</strong> {{ pokemon.data.stats[2].base_stat }}</p>
      <!-- I have set a parameter of the pokemon name to the url, 
      which will in turn get sent as a payload pulling only that pokemon object from the api inside /pages/pokemon/_id-->
      <nuxt-link :to="`/pokemon/${pokemon.data.name}`"
        ><button>Learn More</button></nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["pokemon"]
};
</script>
<style lang="scss" scoped>
.card-item-wrapper {
  max-width: 374px;
  background: white;
  width: 100%;
  margin-right: 0px;
  margin-bottom: 24px;

  &:last-child {
    margin-right: 0px;
  }

  @media screen and (min-width: 767px) {
    margin-right: 40px;
    margin-bottom: 0px;
  }

  .content-body {
    padding: 40px;

    p,
    h2 {
      text-transform: capitalize;
    }
  }
}
</style>
