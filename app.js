var scores,roundScore,activePlayer;
var gamePLaying = true;
scores = [0,0];
roundScore = 0;
activePlayer = 0;
winTheGame = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function() {
   if(gamePLaying) {
      // 1. Random number
  var dice = Math.floor(Math.random() * 6) + 1;
  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  document.querySelector('.dice').src = 'dice-' + dice + '.png';

  if(dice > 1) {
      // add score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
  }else {
      nextPLayer();
  }

   }
  
});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePLaying) {
        // add current score to global score
  scores[activePlayer] += roundScore;

  //  update the user interface 
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  // chek if player won the game 
  if(scores[activePlayer] >= 20) {
     
      document.querySelector('#name-' + activePlayer).textContent = 'Win!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePLaying = false;
  }else {
      // next player
      nextPLayer();
  }
    }  
   
});

document.querySelector('.btn-new').addEventListener('click', pushNewBtn);


function nextPLayer() {
  // next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')

  document.querySelector('.dice').style.display = 'none';

}


function pushNewBtn() {

  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePLaying = true;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-1-panel' ).classList.remove('winner');
document.querySelector('.player-0-panel' ).classList.remove('winner');
document.querySelector('.player-1-panel'  ).classList.remove('active');
document.querySelector('.player-0-panel' ).classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
};





