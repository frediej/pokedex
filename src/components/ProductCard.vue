<script setup>

defineProps({
  pokemon: {
    type: Object,
    required: true,
  }
})

</script>

<template>
  <RouterLink :to="{ name: 'pokemon-details', params: { name: pokemon.name } } " class="link">
      <div class="pokemon-card">
        <img :src="pokemon.image" alt="Image of {{ pokemon.name }}" />
        <h2>{{ pokemon.name }}</h2>
      </div>
    </RouterLink>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex: 1 1 calc(50% - 1rem);
  width: calc(50% - 1rem);
  height: 300px;
  cursor: pointer;
  border: 1px black solid;
  margin-bottom: 1rem;
  background-color: white;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
.product-card:hover {
  background-color: white;
  border-color: gray;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}

.product-card img {
  max-width: 100%;
  height: auto;
}

.product-card h2 {
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
}

.link {
  text-decoration: none;
  color: black;
}
</style>
