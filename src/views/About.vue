<template>
  <div class="blind-test">
    
<div class="pokemon" v-for=" (p, index) in pokemons " v-bind:key="index">

<img v-bind:src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + p.id + '.png'">

        </div>


  </div>
</template>

<style>

img {
  filter: brightness(0%);
}

</style>


<script>

import { PokemonService } from '../services/pokemonService.js'


export default {
  name: 'Demo',
 
  data(){
    return{
      pokemons: [


      ],
      service: new PokemonService,
    }
  },
  mounted(){

this.service.getPokemons().then(pokemons=>{
  this.pokemons = pokemons
})

  }
}

</script>