import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/frediej/pokedex/',  // notice that it doesn't include books
    withCredentials: false,
    headers: {
        Accept: 'application/json',   // what client expect
        'Content-Type': 'application/json' // descriping our request content (none here)
    }
})

export default {
    getPokemon() { 
        return apiClient.get('/pokemon') //  notice that /pokemon will be append to the baseURL
    },
    getPokemon(name = '') { // Fixed to handle overloading issue
        console.log("PokemonService: Requesting URL:", '/pokemon/' + name); // Log the URL
        return apiClient.get('/pokemon/' + name)
    }
}

