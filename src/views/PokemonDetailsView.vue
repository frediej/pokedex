<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { usePokemonStore } from '@/stores/pokemonStore';

const route = useRoute();
const pokemonStore = usePokemonStore();
const thePokemon = ref(null);

onMounted(() => {
    if (pokemonStore.pokemons.length > 0) {
        thePokemon.value = pokemonStore.pokemons.find(pokemon => pokemon.name === route.params.name);
    } else {
        pokemonStore.fetchPokemons().then(() => {
            thePokemon.value = pokemonStore.pokemons.find(pokemon => pokemon.name === route.params.name);
        });
    }
});
</script>

<template>
    <div v-if="thePokemon" class="info">
        <img :src="thePokemon.image" alt="Image of {{ thePokemon.name }}" />
        <h1>{{ thePokemon.name }}</h1>
        <p>Japanese Name: {{ thePokemon.japanese_name }}</p>
        <p>Types: {{ thePokemon.type1 }} / {{ thePokemon.type2 }}</p>
        <p>Evolution: {{ thePokemon.evolution }}</p>
    </div>
    <div v-else>
        <h1>Loading details for: {{ pokemonName }}</h1>
    </div>
</template>

<style scoped>
.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.info img {
    max-width: 100%;
    height: auto;
}
</style>

