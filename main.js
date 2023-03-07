//SELETORES

const tutorialOpening = document.querySelector(".tutorial-controls input");
const tutorialClose = document.querySelector(".close-btn");
const shortcutCheckbox = document.querySelector(".key-tones input");
const notesCheckbox = document.querySelector(".key-notes input");
const keyboardKeys = document.querySelector(".keys");
const keyboardNotesText = document.querySelectorAll(".notes");
const keyShortcut = document.querySelectorAll(".shortcut");
const songbookOpenClose = document.querySelector(".open-songbook");
const songBook = document.querySelector(".songs");

//ONLOAD FUNCTIONS
window.onload = function () {
  volumeRange();
};

//HIDE AND SHOW ITEMS

const hideAndShowShortcuts = () => {
  keyShortcut.forEach((keyShortcut) =>
    keyShortcut.classList.toggle("hidden-keys")
  );
};

shortcutCheckbox.addEventListener("click", hideAndShowShortcuts);
//

const hideAndShowNotes = () => {
  keyboardNotesText.forEach((keyNotes) =>
    keyNotes.classList.toggle("hidden-notes")
  );
};

notesCheckbox.addEventListener("click", hideAndShowNotes);
//

tutorialOpening.addEventListener("click", () => {
  document.querySelector(".tutorial-modal").style.display = "block";
  document.querySelector(".songbook-modal").style.display = "none";
});
//

tutorialClose.addEventListener("click", () => {
  document.querySelector(".tutorial-modal").style.display = "none";
});
//

songbookOpenClose.addEventListener("click", (e) => {
  e.target.classList.toggle("changebg-songs");
  songBook.classList.toggle("hide-songbook");
});



//KEYBOARD PLAYING

const whiteKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const blackKeys = ["w", "e", "t", "y", "u", "o"];

const keyNotes = document.querySelectorAll(".key");
const whiteKeyNotes = document.querySelectorAll(".key.white-key");
const blackKeyNotes = document.querySelectorAll(".key.black-key");

keyNotes.forEach((key) => {
  key.addEventListener("touchend", (e) => {
    playTune(key);
    return;
  });
  key.addEventListener("touchstart", (e) => e.preventDefault(), true);
}); //TOUCH EVENTS

keyNotes.forEach((key) => {
  key.addEventListener("click", () => playTune(key));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = whiteKeys.indexOf(key);
  const blackKeyIndex = blackKeys.indexOf(key);

  if (whiteKeyIndex > -1) {
    playTune(whiteKeyNotes[whiteKeyIndex]);
  }
  if (blackKeyIndex > -1) {
    playTune(blackKeyNotes[blackKeyIndex]);
  }
});

function playTune(key) {
  const volumeInput = document.querySelector(".volume-control input");
  const noteAudio = document.getElementById(key.dataset.tone);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}

// VOLUME FUNCTION CONTROL
const volumeInput = document.querySelector(".volume-range");

volumeInput.addEventListener("input", () => {
  const volumeCount = document.querySelector(".volume-count");
  volumeCount.textContent = parseInt(volumeInput.value * 100);
});

let volumeControl = document.querySelector(".volume-control input");
function volumeRange() {
  Array.from(document.querySelectorAll("audio")).forEach(function (e) {
    e.volume = volumeControl.value;
  });
}

volumeControl.addEventListener("change", volumeRange);
volumeControl.addEventListener("input", volumeRange);