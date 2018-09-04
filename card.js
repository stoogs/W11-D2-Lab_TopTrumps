const Card = function(name, intelligence, strength, agility){
    this.name = name;
    this.intelligence = intelligence;
    this.strength = strength;
    this.agility = agility;
}


let superman = new Card('Superman',6,9,7);

// Name: 'Scarlet Witch'
// Intelligence: 7
// Strength: 10
// Agility: 5

// Name: 'Black Widow'
// Intelligence: 8
// Strength: 6
// Agility: 9

// Name: 'The Flash'
// Intelligence: 7
// Strength: 4
// Agility: 10

// Name: 'Wonder Woman'
// Intelligence: 8
// Strength: 7
// Agility: 5

// Name: 'Batman'
// Intelligence: 10
// Strength: 5
// Agility: 6

module.exports = Card;