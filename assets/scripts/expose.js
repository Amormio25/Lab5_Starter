// expose.js
function getHornDetails(horn) {
  const hornDetails = {
    "air-horn": {
      imgSrc: "/assets/images/air-horn.svg",
      audioSrc: "/assets/audio/air-horn.mp3",
    },
    "car-horn": {
      imgSrc: "/assets/images/car-horn.svg",
      audioSrc: "/assets/audio/car-horn.mp3",
    },
    "party-horn": {
      imgSrc: "/assets/images/party-horn.svg",
      audioSrc: "/assets/audio/party-horn.mp3",
    },
  };
  return hornDetails[horn] || {};
}

function selectHorn(event) {
  const horn = event.target.value;
  const imgContainer = document.querySelector(`img[alt="No image selected"]`);
  const audioFile = document.getElementsByClassName("hidden");

  const { imgSrc, audioSrc } = getHornDetails(horn);
  if (imgSrc && audioSrc) {
    imgContainer.src = imgSrc;
    audioFile.src = audioSrc;
  }
}

function selectVolume(event) {
  const volume = event.target.value;
  const imgContainer = document.querySelector(`img[alt="Volume level 2"]`);
  const audioFile = document.querySelector(".hidden");

  if (volume == 0) imgContainer.src = "/assets/icons/volume-level-0.svg";
  else if (volume < 33) imgContainer.src = "/assets/icons/volume-level-1.svg";
  else if (volume < 67) imgContainer.src = "/assets/icons/volume-level-2.svg";
  else imgContainer.src = "/assets/icons/volume-level-3.svg";

  audioFile.volume = volume / 100;
}

function clickPlaySound() {
  const hornSelect = document.getElementById("horn-select");
  const horn = hornSelect.value;
  const audioFile = document.querySelector(".hidden");

  const { audioSrc } = getHornDetails(horn);
  if (audioSrc) {
    audioFile.src = audioSrc;

    const jsConfetti = new JSConfetti();
    if (horn == "party-horn") jsConfetti.addConfetti();

    audioFile.play();
  }
}

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO
  const hornSelectButton = document.getElementById("horn-select");
  const volumeSlider = document.getElementById("volume");
  const playSoundButton = document.querySelector("button");

  hornSelectButton.addEventListener("change", selectHorn);
  volumeSlider.addEventListener("change", selectVolume);
  playSoundButton.addEventListener("click", clickPlaySound);
}
