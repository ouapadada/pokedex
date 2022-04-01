import axios from "axios"
import { Pokemon } from "../models/pokemon.js";


export class PokemonService{

constructor(){

}
getPokemon(id){
    return new Promise((resolve, reject) =>{
        axios.get("https://pokeapi.co/api/v2/pokemon/" + id).then(response =>{
            let pokemondata = response.data;
            let pokemon = new Pokemon()
            pokemon.base_experience = pokemondata.base_experience
            pokemon.animBack = pokemondata.sprites.versions['generation-v'] ['black-white'].animated.back_default
            pokemon.animFront = pokemondata.sprites.versions['generation-v'] ['black-white'].animated.front_default
            pokemon.sprites = pokemondata.sprites.other['official-artwork'].front_default
            pokemon.name = pokemondata.name
            pokemon.id = pokemondata.id
            pokemon.types = pokemondata.types
            pokemon.hp = pokemondata.stats[0].base_stat
            pokemon.defense = pokemondata.stats[1].base_stat
            pokemon.attack = pokemondata.stats[2].base_stat
            pokemon.special_attack = pokemondata.stats[3].base_stat
            pokemon.special_defense = pokemondata.stats[4].base_stat
            pokemon.speed= pokemondata.stats[5].base_stat
            pokemon.height = pokemondata.height
            pokemon.weight = pokemondata.weight
            resolve(pokemon)
        })
        .catch(reason =>{
            reject("erreur lors de la recup des pokemons" + reason)
        })
    })
}

getPokemons(){
    return new Promise((resolve, reject) =>{
        let pokemons = []


        axios.get('https://pokeapi.co/api/v2/pokemon?limit=150').then(response => {
            let result = response.data.results;
            result.forEach(p => {

                let substrings = p.url.split("/")
                let id = substrings[substrings.length - 2];
                p.id = id;
            })
            resolve(pokemons)
        })
        .catch(reason =>{
            reject("erreur lors de la recup des pokemons" + reason)
        })

    })



}


}