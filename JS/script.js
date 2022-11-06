//* Cursor Progress bar Script
//Document Object Model(DOM)
// let CursorMeter = document.getElementById("CursorMeter");
// document.addEventListener("mousemove", function (e) {
//   CursorMeter.style.top = e.clientY + "px";
//   CursorMeter.style.left = e.clientX + "px";
// });

// let persent = document.getElementById("persent");
// let progressBar = document.getElementById("progressBar");

// let totalHeight = document.body.scrollHeight - window.innerHeight;
// //** windows.scroll */
// window.onscroll = function () {
//   let progress = (window.pageYOffset / totalHeight) * 100;
//   progressBar.style.width = progress + "%";
//   persent.innerHTML = "Page Scrolled " + Math.round(progress) + "%";
// };

// ? Script for hiding the message
// function initialSetup() {
//   document.getElementById("hide").style.visibility = "visible";
//   setTimeout(function () {
//     document.getElementById("hide").style.visibility = "hidden";
//   }, 8000);
// }
// initialSetup();

// ! The bellow code for the Navigation buttons

const buttonPrev = document.querySelector(".prev");

if (buttonPrev) {
  window.addEventListener("scroll", () => {
    if (pageYOffset > window.innerHeight * 1.2) {
      buttonPrev.style.display = "flex";
    } else {
      buttonPrev.style.display = "none";
    }
  });
  buttonPrev.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

// Insitializeing AOS for div animations
AOS.init();
