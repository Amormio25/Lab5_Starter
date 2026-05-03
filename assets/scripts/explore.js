// explore.js

window.addEventListener("DOMContentLoaded", init);

let speechSynthesis = window.speechSynthesis;
let voices = [];
let selectedVoice = null;

function init() {
  const speakButton = document.querySelector("button");

  loadVoices();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.addEventListener("voiceschanged", loadVoices);
  }

  speakButton.addEventListener("click", function () {
    speakText();
  });
}

function loadVoices() {
  voices = speechSynthesis.getVoices();
  const voiceSelect = document.getElementById("voice-select");

  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    if (voice.default) {
      option.textContent += " — Default";
    }
    voiceSelect.appendChild(option);
  });

  if (voices.length > 0) {
    selectedVoice = voices[0];
  }

  // update selected voice when dropdown changes
  voiceSelect.addEventListener("change", function (event) {
    const selectedIndex = parseInt(event.target.value);
    selectedVoice = voices[selectedIndex];
  });
}

function speakText() {
  const textArea = document.getElementById("text-to-speak");
  const textToSpeak = textArea.value.trim();
  const faceImage = document.querySelector("img");

  if (textToSpeak === "") return;

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  if (selectedVoice) utterance.voice = selectedVoice;

  utterance.onstart = () => {
    faceImage.src = "./assets/images/smiling-open.png";
    faceImage.alt = "Open mouthed face";
  };

  utterance.onend = () => {
    faceImage.src = "./assets/images/smiling.png";
    faceImage.alt = "Smiling face";
  };

  speechSynthesis.speak(utterance);
}
