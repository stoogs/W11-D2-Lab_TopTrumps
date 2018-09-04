
const assert = require('assert');
const Card = require('../card.js');

describe('Card', function(){


    beforeEach(function(){
    superman = new Card('Superman',6,9,7);
    scarlet = new Card('Scarlet Witch',7,10,5);
    blackWidow = new Card('Black Widow',8,6,9);
    theFlash = new Card('The Flash',7,4,10);
    wonderWoman = new Card('Wonder Woman',8,7,5);
    batman = new Card('Batman',10,5,6);
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