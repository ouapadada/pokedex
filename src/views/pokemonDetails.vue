<template>
<div>
    <div class="head">
    <div class="tittle">
    <h1>
      {{ pokemon.name }} n°{{ pokemonId }}
    </h1>
         <div class="img-type">
                 <img class="type" v-for="(p, index) in getUrl" v-bind:key="index" v-bind:src="p">
         </div>
    </div>
    <div class="haut-page">
    <div class="physique">
        <div class="physique-detail">
            <h3 class="txt-physique" id="titre-physique"> { Taille </h3>
            <p>{{pokemon.height*10}} cm </p> 
            
        </div>
            <div class="physique-detail">
                 <h3 class="txt-physique"> { Poids </h3>
            <p >{{pokemon.weight/10}} kg </p> 
            </div>
          </div>
          <div class="gif">
                <img class="animation" v-bind:src="pokemon.animBack">
                <img class="animation" v-bind:src="pokemon.animFront">
            </div>
    </div>
             <div class="info">
                <div class="detail">
                  <h3>/      HP      /</h3>
                  <p class="stats">{{pokemon.hp}}<p/>
                </div>
            <div class="detail"> 
                <h3>/ Attaque /</h3>
               <p class="stats">{{pokemon.attack}}<p/>
            </div>
            <div class="detail"> 
               <h3>/ Defense /</h3>
                <p class="stats">{{pokemon.defense}}<p/>
            </div>
            <div class="detail"> 
                <h3>/ Attaque spéciale /</h3>
                <p class="stats">{{pokemon.special_attack}}<p/>
            </div>
            <div class="detail"> 
                <h3>/ Défense spéciale /</h3>
                <p class="stats">{{pokemon.special_defense}}<p/>
            </div>
            <div class="detail"> 
                <h3>/ Vitesse /</h3>
                <p class="stats">{{pokemon.speed}}<p/>
            </div>
        </div>
    </div>
    <div class="corps">
    </div>
</div>
</template>
<style scoped>

.tittle {
    display: flex;
    justify-content: space-evenly;
align-items: center;
padding-top: 1em;
}

h1 {
    text-transform: capitalize;
}

.animation {
width: 11vw;
}

.type {
    width: 3vw;
    height: 6vh;
}


.abilities {
        display: inline-flex;
    align-content: stretch;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 34%;
    flex-wrap: wrap;
}

.info {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    border-bottom: solid 1px black;
    padding: 2%;
}

.physique {
    display: flex;
    flex-direction: column;
    margin-left: 14em;
    width: fit-content;
    background-color: aliceblue;
    border-radius: 10%;
}

.physique-detail {
    display: flex;
    align-items: center;
    padding: 1em;
}

.txt-physique {
        margin-right: 1em;
}

.gif {
    margin-right: 14em;
}

.haut-page {
    display: flex;
    justify-content: space-evenly;
}

.stats {
    background-color: aliceblue;
    border-radius: 15vw;
    padding: 1vw 0;
}

</style>
<script>
import { PokemonService } from '../services/pokemonService.js'

export default{
    name: 'PokemonDetails',
    data(){
        return{
            pokemonId:0,
            service: new PokemonService(),
            pokemon: {}
        }
        

    },
    mounted(){
       let route = this.$route
       this.pokemonId = route.params.id

       this.service.getPokemon(this.pokemonId).then(pokemon =>{
           this.pokemon = pokemon
       })
    },
    computed: {
        getUrl(){

            let url = []
            this.pokemon.types.forEach(t => {
                    
                
                switch (t.type.name){
                case 'normal':
                    url.push('https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg')
                    break;

                 case 'fire':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/640px-Pok%C3%A9mon_Fire_Type_Icon.svg.png')
                      break;

                case 'dark':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/640px-Pok%C3%A9mon_Dark_Type_Icon.svg.png')
                      break;

                case 'fairy':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/640px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png')
                      break;

                case 'ghost':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/640px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png')
                      break;

                case 'poison':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/640px-Pok%C3%A9mon_Poison_Type_Icon.svg.png')
                      break;

                case 'dragon':
                    url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/640px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png')
                    break;

                 case 'rock':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/640px-Pok%C3%A9mon_Rock_Type_Icon.svg.png')
                      break;

                case 'fighting':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/640px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png')
                      break;

                case 'ground':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/640px-Pok%C3%A9mon_Ground_Type_Icon.svg.png')
                      break;

                case 'bug':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/640px-Pok%C3%A9mon_Bug_Type_Icon.svg.png')
                      break;
            
                case 'steel':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/640px-Pok%C3%A9mon_Steel_Type_Icon.svg.png')
                      break;

                case 'ice':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/640px-Pok%C3%A9mon_Ice_Type_Icon.svg.png')
                      break;

                case 'electric':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/640px-Pok%C3%A9mon_Electric_Type_Icon.svg.png')
                      break;

                case 'psychic':
                    url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/640px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png')
                    break;

                 case 'water':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/640px-Pok%C3%A9mon_Water_Type_Icon.svg.png')
                      break;

                case 'flying':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/640px-Pok%C3%A9mon_Flying_Type_Icon.svg.png')
                      break;

                case 'grass':
                     url.push('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/640px-Pok%C3%A9mon_Grass_Type_Icon.svg.png')
                      break;
                }
            })
            return url
                    }
    }
}
</script>