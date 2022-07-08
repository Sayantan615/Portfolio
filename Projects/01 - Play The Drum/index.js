function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //stop the function from running all togather
  audio.currentTime = 0; //rewined to the start
  audio.play();

  key.classList.add("playing");
  setTimeout(function(){
      key.classList.remove("playing");
  }, 100);

}

window.addEventListener("keydown", playSound);

// ! Different Approch
var numberOfDrumButtons = document.querySelectorAll(".key").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".key")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}


function makeSound(key) {
 
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}



