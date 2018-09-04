const assert = require('assert');
const Player = require('../player.js');
const Game = require('../game.js');
const Card = require('../card.js');

describe('Game', function(){

    let game;
    let player1;
    let player2;
    let cards;
  

    beforeEach(function(){
        player1 = new Player("Stuart");
        player2 = new Player("Molly");
        superman = new Card('Superman',6,9,7);
        scarlet = new Card('Scarlet Witch',7,10,5);
        cards = [];
        cards.push(superman);
        cards.push(scarlet);
        game = new Game(player1,player2,cards);

    });

    it('cards should have 2 cards in it', function(){
        const actual = cards.length;
        assert.strictEqual(actual, 2);
    })

    it('game should have player1', function(){
        const actual = game.player1
        assert.strictEqual(actual, player1);
    })

    it('game should have player2', function(){
        const actual = game.player2
        assert.strictEqual(actual, player2);
    })

    it('game should have cards', function(){
        const actual = game.cards.length;
        assert.strictEqual(actual, 2);
    })

    it('giveCardToPlayer1', function(){
         game.giveCardToPlayer1(superman);
         const actual = game.player1.cards.length;
        assert.strictEqual(actual, 1);
    });
    
    it('giveCardToPlayer2', function(){
         game.giveCardToPlayer2(scarlet);
         const actual = game.player2.cards.length;
        assert.strictEqual(actual, 1);
    });

    it('checkvalues', function(){
        const actual =   game.checkValueOfCards(player1, player2);
     
       assert.strictEqual(actual, "player 1 wins");
   });

});