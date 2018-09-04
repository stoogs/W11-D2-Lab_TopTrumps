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

Game.prototype.checkValueOfCardsAgility = function(p1cards, p2cards){
    if (p2cards[0].agility > p2cards[0].agility){
        return "player 1 wins"
    } else {
        return "player 2 wins"
    }
}

Game.prototype.findWinnerAgility = function(p1cards, p2cards){
    for (card1 of p1cards){
        for (card2 of p2cards){
            console.log(`player 1 ${card1.name} Agility is: ${card1.agility}`);
            console.log(`player 2 ${card2.name} Agility is: ${card2.agility}`);
            
        if (card1.agility === card2.agility){
            return "It's a Draw on Agility"
    } else {
            if (card1.agility > card2.agility){
                return "player 1 wins on Agility"
    } else {
                return "player 2 wins on Agility"
    }
}
}
}
}

Game.prototype.findWinnerIntelligence = function(p1cards, p2cards){
    for (card1 of p1cards){
        for (card2 of p2cards){
            console.log(`player 1 ${card1.name} intelligence is: ${card1.intelligence}`);
            console.log(`player 2 ${card2.name} intelligence is: ${card2.intelligence}`);
            
        if (card1.intelligence === card2.intelligence){
            return "It's a Draw on intelligence"
    } else {
            if (card1.intelligence > card2.intelligence){
                return "player 1 wins on Intelligence"
    } else {
                return "player 2 wins on Intelligence"
    }
}
}
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


Game.prototype.findWinner = function(p1cards, p2cards, ability){
    for (card1 of p1cards){
        for (card2 of p2cards){
            console.log(`player 1 ${card1.name} ${ability} is: ${card1[ability]}`);
            console.log(`player 2 ${card2.name} ${ability} is: ${card2[ability]}`);
        if (card1[ability] === card2[ability]){
            return `It's a Draw on ${ability}`
    } else {
            if (card1[ability] > card2[ability]){
                return `player 1 wins on ${ability}`
    } else {
                return `player 2 wins on ${ability}`
    }
}
}
}
}








}//end






module.exports = Game;