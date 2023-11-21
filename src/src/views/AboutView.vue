<script setup>
import { onMounted, ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { db } from '@/js/firebase.js';
import { collection, getDocs, onSnapshot } from "firebase/firestore";

const pokedex = ref([])

async function getPokedex() {
  onSnapshot(collection(db, 'pokedex'), (querySnapshot) => {
    let snapshot = [];
    querySnapshot.forEach((doc) => {
      const pokemon = {
        name: doc.id,
        image: doc.data().image,
        japanese_name: doc.data().japanese,
        type1: doc.data().type1,
        type2: doc.data().type2,
        evolution: doc.data().evolution,
      }
      snapshot.push(pokemon)
    });
    pokedex.value = snapshot;
  })
}

onMounted(() => {
  getPokedex();
}
)

</script>

<template>
  <div class="products">
    <ProductCard class="pokedex-entry" v-for="pokemon in pokedex" :key="pokemon.name" :pokemon="pokemon" />
  </div>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.pokedex-entry {
  flex: 0 0 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%
}
</style>