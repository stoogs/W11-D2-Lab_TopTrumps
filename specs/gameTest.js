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
        blackWidow = new Card('Black Widow',8,6,9);
        theFlash = new Card('The Flash',7,4,10);
        wonderWoman = new Card('Wonder Woman',8,7,5);
        batman = new Card('Batman',10,5,6);

        cards = [superman,scarlet,blackWidow,theFlash,wonderWoman,batman];
        game = new Game(player1,player2,cards);
    });

    it('Cards should have 2 cards in it', function(){
        const actual = cards.length;
        assert.strictEqual(actual, 6);
    })

    it('Game should hold player1', function(){
        const actual = game.player1
        assert.strictEqual(actual, player1);
    })

    it('Game should hold player2', function(){
        const actual = game.player2
        assert.strictEqual(actual, player2);
    })

    it('Game should hold Array<cards>, which holds 6 cards', function(){
        const actual = game.cards.length;
        assert.strictEqual(actual, 6);
    })

    it('Game gives card to player 1', function(){
         game.giveCardToPlayer1(superman);
         const actual = game.player1.cards.length;
        assert.strictEqual(actual, 1);
    });
    
    it('Game gives card to player 2', function(){
         game.giveCardToPlayer2(scarlet);
         const actual = game.player2.cards.length;
        assert.strictEqual(actual, 1);
    });

    it('Check agility of P1 card', function(){
        game.giveCardToPlayer1(superman);
        const actual = game.checkAgility(player1.cards);
        assert.strictEqual(actual, 7);
    });


    it('Compare P1 P2 agility values, return winner in message', function(){
        game.giveCardToPlayer1(superman);
        game.giveCardToPlayer2(scarlet);
        const actual = game.checkValueOfCardsAgility(player1.cards, player2.cards);
       assert.strictEqual(actual, "player 2 wins");
    });

    it('Deal cards to players', function(){
        game.givePlayersCards()
        const actual = game.player1.cards.length;    
        const actual2 = game.player2.cards.length;    
        // console.table(game.player1.cards);    
        // console.table(game.player2.cards);    
        assert.strictEqual(actual, 3);
        assert.strictEqual(actual2, 3);
    });

    // it('Check chosen attribute', function(){
    //     game.givePlayersCards()
    //     console.table(game.player1.cards);
    //     console.table(game.player2.cards);
    //     console.log("------------------------");
    //     game.checkChosenAttribute();
    //     console.table(game.player1.cards);
    //     console.table(game.player2.cards);
    //     assert.strictEqual(3, 3);
    // });

    it('Check Player 1 wins On Agility', function(){
        game.givePlayersCards()
        let actual = game.findWinnerAgility(player1.cards, player2.cards);
        console.log(actual);
        assert.strictEqual(actual, "player 1 wins on Agility");
    });

    it('Check Player 2 wins On Intelligence', function(){
        game.givePlayersCards()
        let actual = game.findWinnerIntelligence(player1.cards, player2.cards);
        console.log(actual);
        assert.strictEqual(actual, "player 2 wins on Intelligence");
    });
  
    it('Check any passed property works', function(){
        game.givePlayersCards()
        let actual = game.findWinner(player1.cards, player2.cards, 'strength' );
        assert.strictEqual(actual, "player 2 wins on strength");
        console.log(actual)
    });

    it('Check any passed property works', function(){
        game.givePlayersCards()
       
        let actual2 = game.findWinner(player1.cards, player2.cards, 'intelligence' );
        assert.strictEqual(actual2, "player 2 wins on intelligence");
        console.log(actual2)
    });

    it('Check any passed property works', function(){
        game.givePlayersCards()
        let actual3 = game.findWinner(player1.cards, player2.cards, 'agility' );
        assert.strictEqual(actual3, "player 1 wins on agility");
        console.log(actual3)
    });

});