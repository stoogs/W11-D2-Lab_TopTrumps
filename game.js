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

Game.prototype.checkAgility = function(p1cards){
    return p1cards[0].agility;
}

Game.prototype.checkValueOfCards = function(p1cards, p2cards){
    if (p2cards[0].agility > p2cards[0].agility){
        return "player 1 wins"
    } else {
        return "player 2 wins"
    }
}

Game.prototype.givePlayersCards = function(){
    let count = 0;
    count = this.cards.length;
    for(i=0; i < count ; i++){
    this.player1.cards.push(this.cards[i]);
    this.player2.cards.push(this.cards[i+1]);
    i++;
}
    

}






module.exports = Game;