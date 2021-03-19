// global constants
var clueHoldTime = 1000; // Changing clueHoldTime to a variable
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var strike = 0;
var interval;

// randomPattern function generate a list of numbers randomly.
function randomPattern() {
  pattern = [];
  const max = 8;
  const min = 1;
  var num;
  for (let i = 0; i < max; i++) {
    var num = Math.floor(Math.random() * (max - min) + min);
    pattern.push(num);
  }
  console.log(pattern);
}

function startGame() {
  //initialize game variables
  strike = 0;
  progress = 0;
  gamePlaying = true;
  randomPattern();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clearInterval(interval);
  document.getElementById('displayTime').innerHTML="";
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500,
  6: 300,
  7: 550,
  8: 170
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;

  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay, pattern[i]); // set a timeout to play that clue
    clueHoldTime -= 5; //clueHoldTime decreases by 5ms every for loop
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  
  setInterval(startCountdown(15), 5000);
}

function loseGame() {
  stopGame();
  console.log("Game Over. You lost.");
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  console.log("Game Over. You won!");
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    clearInterval(interval);
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    if (strike >= 3) {
      loseGame();
    } else {
      ++strike;
      alert(
        "Wrong Answer! Please Try Again! " + (3 - strike) + " Strike Left."
      );
      console.log("User has " + strike + " strike");
    }
  }
}

function startCountdown(seconds) {
  let counter = seconds;

  interval = setInterval(() => {
    console.log(counter);
    document.getElementById('displayTime').innerHTML=counter;
    counter--;
    if (counter < 0 ) {
      clearInterval(interval);
      console.log("Time's Up!");
      document.getElementById('displayTime').innerHTML="Time's Up!";
      loseGame();
    }
  }, 1000);
}
