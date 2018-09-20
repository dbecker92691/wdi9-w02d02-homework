// The Cards

// create a game where player1 will battle autoPlayer
// the game will deal 3 cards to the player1 and 3 cards to the autoPlayer
// the player1 will chose a card and the autoPlayer will chose a card
// whichever card has the highest value will win the point
// A round will finish once this is done 3 times

// things the game should be able to do:
// 1. keep track of the cards that CAN be played
// 2. know what cards HAVE been played
// 3. know how many cards are left to be played
// 4. track points for the player and the computer (if either player's card is defeated the
// opponent gets a point)
// 5. track the round
// 6. automatically deal 3 cards from the library to the player and computer 
// 7. detrimin the winner of each play
// 9. stop once there are not enough cards left for each player to get 3

// step 1
// - create the players
// - players should have a name

// step 2
// - players should be delt cards
// - each player should have a list of the cards they are delt that round
//     - console.log(cards each player got)

// step 3
// - players should battle
// - when players battle, cards will randomly be played against eachother 1 at a time
//      - console.log(each card that was played)
// - once a card is played the winner of that play will be determined by who has the 
//  highest damage ponts
//      - console.log(winner of each play)
// this will repeat 3 times

// step 4
// - the winner of the round will be determined by who won the most plays
//      - console.log(winner of each round)
// - the process starts over from Step 2 until we have completed the deck


// step 5
// - a winner is determined by who won the most rounds
//      - console.log(game winner)




// player should keep track of cards in play
//      - cards in play should keep the total of damage point in play
// player should keep track of cards that were already played
// player should have an attack method 
//      - attack method should keep track of how much damage a player inflicts



//
//
// DOESN'T WORK YET
//
//
//








const pokemonLibrary = [
  {
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle", 
    damage: 40
  }
]


class Player { 
  constructor(name) {
    this.name = name
  }


  attack(player){
    console.log('attack');
    if(player.hand[i].damage > opponent.hand[i].damage){ // still need to define cardPlayed 
      console.log(`${player.name} wins hand!`) 
    } else {
      console.log(`${opponent.name} wins hand.`)
    }
  }
  cardsInHand() {  
    hand = [];
    for(let i = 0; i < pokemonLibrary.length; i++){
      cardsDelt = i++
      hand.push(cardsDelt[i]);
      console.log(hand);
      pokemonLibrary.splice(cardsDelt);
  }
  }
  } 


player1 = new Player("Greg");

player2 = new Player("Steve");
    
  



   

game = {
playing: true,

startGame() {
  let which = 0;
  Player.cardsInHand();
  while(game.playing) {
    game.round(which)
    which++
  }

},


round() {
  while ((game.playing === true) && (pokemonLibrary.length >= 6)) {
    player1.attack(player2[i]);
    player2.attack(player1[i]);
  } if(player1[hand].damage > player2[hand].damage) {
    console.log(`${player1} winns round!`)
  } else {
    console.log(`${player2} wins round.`)
  }
}



}


game.startGame();