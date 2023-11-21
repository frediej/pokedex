<script setup>
import { onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { usePokemonStore } from '../stores/pokemonStore';

const pokemonStore = usePokemonStore();

onMounted(() => {
  if (pokemonStore.pokemons.length === 0) {
    pokemonStore.fetchPokemons();
  }
})

</script>

<template>
  <div class="products">
    <ProductCard class="pokedex-entry" v-for="pokemon in pokemonStore.pokemons" :key="pokemon.name" :pokemon="pokemon" />
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.pokedex-entry{
  flex: 0 0 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%
}

</style>