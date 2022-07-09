function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //stop the function from running all togather
  audio.currentTime = 0; //rewined to the start
  audio.play();

  key.classList.add("playing");
  setTimeout(function () {
    key.classList.remove("playing");
  }, 100);
}

window.addEventListener("keydown", playSound);

// const array = document.querySelector(".key");
// console.log(array[0]);
