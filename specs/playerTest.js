const assert = require('assert');
const Player = require('../player.js');

describe('Player', function(){

    let player1;
    let player2;

    beforeEach(function(){
        player1 = new Player("Stuart");
        player2 = new Player("Molly");
    });

    it('player should have a name', function(){
        const actual = player1.name;
        assert.strictEqual(actual, "Stuart");
    });

});