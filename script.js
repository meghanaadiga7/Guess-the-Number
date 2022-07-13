let randomNumber = Math.trunc(Math.random() * 20) + 1;
let statement = document.querySelector('.message');
let scoreStatement = document.querySelector('.score');
let highscoreStatement = document.querySelector('.highscore');
let backgroundColorr = document.querySelector('body');
let number = document.querySelector('.number');
let highscore = 0;
let score = 20;

function calculate(string) {
  statement.textContent = string;
  score -= 1;
  scoreStatement.textContent = score;
}

function winnerEdits() {
  number.style.width = '30rem';
  number.textContent = randomNumber;
  backgroundColorr.style.backgroundColor = 'green';
}

function originalEdits() {
  number.style.width = '15rem';
  number.textContent = '?';
  backgroundColorr.style.backgroundColor = 'black';
  scoreStatement.textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) statement.textContent = 'No number';
  else if (guess === randomNumber) {
    winnerEdits();
    statement.textContent = 'Correct Number';
    highscore = highscore > score ? highscore : score;
    highscoreStatement.textContent = highscore;
  } else {
    if (score > 0) {
      randomNumber > guess ? calculate('Higher') : calculate('Lower');
    } else {
      statement.textContent = 'You lost';
      backgroundColorr.style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  statement.textContent = 'Start guessing';
  score = 20;
  document.querySelector('.guess').value = '';
  originalEdits();
});
