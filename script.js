'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 11;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(secretNumber, typeof secretNumber);

  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');
    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b387';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // restartGame();
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too high!📈' : 'Too low!📈';
      displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📈');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
      // restartGame();
    }
  }
  // when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       guess > secretNumber ? 'Too high!📈' : 'Too low!📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     // restartGame();
  //   }
  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!📈';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     restartGame();
  //   }
  // }
});

// const restartGame = function () {
//   document.querySelector('.again').addEventListener('click', function () {
//     const again = Number(document.querySelector('.guess').value);
//     console.log(again, typeof again);
//     console.log('score' + score);
//     document.querySelector('body').style.backgroundColor = '#222';
//     score = 20;
//     document.querySelector('.score').textContent = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     document.querySelector('.number').textContent = '?';
//   });
// };

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// document.querySelector('.auto').addEventListener('click', function () {    learning to do this later
//   console.log(secretNumber);
//   let firstNum = Math.trunc(Math.random() * 20) + 1;
//   while (firstNum !== secretNumber) {
//     console.log(secretNumber);
//     document.querySelector('.guess').value = firstNum;
//     firstNum = Math.trunc(Math.random() * 20) + 1;
//   }
});
