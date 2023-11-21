// src/stores/pokemonStore.js
import { defineStore } from 'pinia';
import PokemonService from '@/services/PokemonService.js';

export const usePokemonStore = defineStore('pokemon', {
    state: () => ({
        pokemons: []
    }),
    actions: {
        async fetchPokemons() {
            try {
                const response = await PokemonService.getPokemon();
                this.pokemons = response.data;
            } catch (error) {
                console.error('Error fetching pokemons:', error);
            }
        }
    }
});
