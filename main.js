//SELETORES

const tutorialOpening = document.querySelector(".tutorial-controls input");
const tutorialClose = document.querySelector(".close-btn");
const volumeInput = document.querySelector(".volume-range");
const metronomeInput = document.querySelector(".metronome-range");
const shortcutCheckbox = document.querySelector(".key-tones input");
const notesCheckbox = document.querySelector(".key-notes input");
const keyboardKeys = document.querySelector(".keys");
const keyShortcut = document.querySelectorAll(".shortcut");
const songbookOpenClose = document.querySelector(".open-songbook");
const songBook = document.querySelector(".songs");

//VOLUME INTERACTION

volumeInput.addEventListener("input", volumeControl);

function volumeControl(event) {
  audio.volume = event.target.value;
} //FALTA COMPLETAR!!!!!

//VOLUME RANGE CONTROLS

volumeInput.addEventListener("input", () => {
  const volumeCount = document.querySelector(".volume-count");
  volumeCount.textContent = volumeInput.value;
});

//METRONOME RANGE CONTROLS

metronomeInput.addEventListener("input", () => {
  const metronomeCount = document.querySelector(".metronome-count");
  metronomeCount.textContent = metronomeInput.value;
});

//HIDE AND SHOW ITEMS

const hideAndShowShortcuts = () => {
  keyShortcut.forEach((keyShortcut) =>
    keyShortcut.classList.toggle("hidden-keys")
  );
};

shortcutCheckbox.addEventListener("click", hideAndShowShortcuts);
//

const hideAndShowNotes = () => {
  keyNotes.forEach((keyNotes) => keyNotes.classList.toggle("hidden-notes"));
};

notesCheckbox.addEventListener("click", hideAndShowNotes);
//

tutorialOpening.addEventListener("click", () => {
  document.querySelector(".tutorial-modal").style.display = "flex";
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

const whiteKeys = ['a', 's', 'd', 'f', 'd', 'f', 't']

const keyNotes = document.querySelectorAll(".key");

keyNotes.forEach(key => {
  key.addEventListener("click", () => playTune(key));
});

function playTune(key) {
  const noteAudio = document.getElementById(key.dataset.tone);
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

