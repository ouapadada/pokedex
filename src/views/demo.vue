<template>
    <div class="parent">
<div class="pokemon" v-for=" (p, index) in pokemons" v-bind:key="index">
<h1>
<router-link v-bind:to="'/pokemons/' + p.id">
<img v-bind:src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + p.id + '.png'">
<br>
{{ p.name }}
</router-link>
</h1>
        </div>
        </div>
</template>
<style scoped>
li{
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #353535;
  text-transform: capitalize;
}


.parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

img {
  width: 11vw;
}

.pokemon {
margin: 2vw;
    padding: 2vw;
    background-color: aliceblue;
    border-radius: 10%;
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
  created(){
    console.log('created')
  },
  mounted(){

this.service.getPokemons().then(pokemons=>{
  this.pokemons = pokemons
})

  }
}


</script>