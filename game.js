const Game = function(player1, player2, cards){
    this.player1 = player1;
    this.player2 = player2;
    this.cards = cards;
}

Game.prototype.giveCardToPlayer1 = function(card){
    this.player1.cards.push(card);
}
Game.prototype.giveCardToPlayer2 = function(card){
    this.player2.cards.push(card);
}

Game.prototype.checkValueOfCards = function(player1, player2){
    if (player1.cards[0].agility < player2.cards[0].agility){
return "player 1 wins"
    } else {
        return "player 2 wins"
    }
}

module.exports = Game;