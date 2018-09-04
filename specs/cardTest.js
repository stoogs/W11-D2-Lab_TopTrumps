
const assert = require('assert');
const Card = require('../card.js');

describe('Card', function(){


    beforeEach(function(){

    superman = new Card('Superman',6,9,7);
    scarlet = new Card('Scarlet Witch',7,10,5);
    });

    it('Card has a name?', function(){
        const actual = superman.name;
        assert.strictEqual(actual,'Superman');
    });

    it('Card has a name?', function(){
        const actual = scarlet.name;
        assert.strictEqual(actual,'Scarlet Witch');
    });

    it('card had intelligence', function(){
        const actual = superman.intelligence;
        assert.strictEqual(actual, 6)
    });

});