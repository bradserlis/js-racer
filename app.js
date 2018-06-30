const raceTrack = document.getElementById('raceTrack');
const restartButton = document.querySelector('button');
const context = raceTrack.getContext('2d');
const chickSprite = new Image();
chickSprite.src = 'chick.jpg';
const chickenSprite = new Image();
chickenSprite.src = 'greychicken.jpg';

let chickXPos = 0;
const chickYPos = 0;
let chickenXPos = 0;
const chickenYPos = 70;

context.drawImage(chickSprite, chickXPos, chickYPos, 40, 40);
context.drawImage(chickenSprite, chickenXPos, chickenYPos, 40, 40);
context.stroke();

const checkWin = () => {
  if (chickXPos > raceTrack.width - 28) {
    alert('THE CHICK HAS WON!');
  }
  if (chickenXPos > raceTrack.width - 28) {
    alert('THE CHICKEN HAS WON!');
  }
};

const restartGame = () => {
  raceTrack.width = raceTrack.width;
  chickXPos = 0;
  chickenXPos = 0;
  context.drawImage(chickSprite, chickXPos, chickYPos, 40, 40);
  context.drawImage(chickenSprite, chickenXPos, chickenYPos, 40, 40);
  context.stroke();
  alert('The chickens prepare for another race...');
};

const move = (e) => {
  if (e.keyCode === 39) {
    chickXPos += 4;
  }
  if (e.keyCode === 68) {
    chickenXPos += 4;
  }
  raceTrack.width = raceTrack.width;
  context.drawImage(chickSprite, chickXPos, chickYPos, 40, 40);
  context.drawImage(chickenSprite, chickenXPos, chickenYPos, 40, 40);
  context.stroke();
  checkWin();
};

document.onkeydown = move;

restartButton.addEventListener('click', () => {
  restartGame();
});
