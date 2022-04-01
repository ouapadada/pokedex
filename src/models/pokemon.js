export class Pokemon {
    //proprietes d'un pokemon
    id;
    name;
    height;
    types;
    base_experience;
    sprites;
    moves;
    hp;
    weight;
    //constructeur de la classe pokemon
    constructor(anid, aname, anheight, anweight, atypes, aabilities, asprites, ahp ){
        this.id = anid
        this.name = aname
        this.height = anheight
        this.height = anweight
        this.types = atypes
        this.abilities = aabilities
        this.sprites = asprites
        this.hp = ahp
    }
}