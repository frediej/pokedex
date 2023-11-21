<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import {db} from '@/js/firebase.js';
import {doc, getDoc} from 'firebase/firestore';

const route = useRoute();
const thePokemon = ref(null);

async function fetchPokemon() {
    const pokemonRef = doc(db, 'pokedex', route.params.name);
    const pokemonSnap = await getDoc(pokemonRef);
    if (pokemonSnap.exists()) {
        const pokemon = {
            name: pokemonSnap.id,
            image: pokemonSnap.data().image,
            japanese_name: pokemonSnap.data().japanese,
            type1: pokemonSnap.data().type1,
            type2: pokemonSnap.data().type2,
            evolution: pokemonSnap.data().evolution,
        }
        thePokemon.value = pokemon;
    }
}
onMounted(() => {
    fetchPokemon();
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
        <h1>Loading details for: {{ route.params.name }}</h1>
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

