//SELETORES

const tutorialOpening = document.querySelector('.tutorial-controls input')
const tutorialClose = document.querySelector('.close-btn')
const volumeInput = document.querySelector('.volume-range')
const metronomeInput = document.querySelector('.metronome-range')
const shortcutCheckbox = document.querySelector('.key-tones input')
const notesCheckbox = document.querySelector('.key-notes input')
const keyboardKeys = document.querySelector('.keys')
const keyShortcut = document.querySelectorAll('.shortcut')
const keyNotes = document.querySelectorAll('.notes')
const songbookOpenClose = document.querySelector('.open-songbook')
const songBook = document.querySelector('.songs')

//VOLUME INTERACTION

volumeInput.addEventListener('input', volumeControl)

function volumeControl(event) {
    audio.volume = event.target.value
} //FALTA COMPLETAR!!!!!

//VOLUME RANGE CONTROLS

volumeInput.addEventListener('input', () => {
    const volumeCount = document.querySelector('.volume-count')
    volumeCount.textContent = volumeInput.value  
})

//METRONOME RANGE CONTROLS

metronomeInput.addEventListener('input', () => {
    const metronomeCount = document.querySelector('.metronome-count')
    metronomeCount.textContent = metronomeInput.value
})

//HIDE AND SHOW ITEMS

const hideAndShowShortcuts = () => {
    keyShortcut.forEach(keyShortcut => keyShortcut.classList.toggle("hidden-keys"))
}

shortcutCheckbox.addEventListener('click', hideAndShowShortcuts)
//

const hideAndShowNotes = () => { 
    keyNotes.forEach(keyNotes => keyNotes.classList.toggle("hidden-notes"))
}

notesCheckbox.addEventListener('click', hideAndShowNotes)
//

tutorialOpening.addEventListener('click', () => {
    document.querySelector('.tutorial-modal').style.display = "flex";
})
//

tutorialClose.addEventListener('click', () => {
    document.querySelector('.tutorial-modal').style.display = "none";
})
//

songbookOpenClose.addEventListener('click', (e) => {
    e.target.classList.toggle('changebg-songs')
    songBook.classList.toggle('hide-songbook')
})

//PLAYING AUDIOS FROM CLICKING

let audio = new Audio('tones/key01.mp3')

const playTune = (key) => {
    audio.src = `tones/${key}.mp3`
}

//KEYBOARD PLAYING











// function playAudio(newPath) {
//     new Audio(newPath).play()
// }

// const mainKeys = document.querySelectorAll('.key')

// mainKeys.forEach((mainKey, i) => {
//     const numberKey = i < 9 ? '0' + (i + 1) : (i + 1)
//     const newPath = 'tones/key' + numberKey + '.mp3'
//     mainKey.addEventListener('click', () => playAudio(newPath))
// })