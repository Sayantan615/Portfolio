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
const buttonNext = document.querySelector(".next");
const secArray = document.querySelectorAll("section");
console.log(buttonPrev);
console.log(buttonNext);

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

// ! working
//  $(document).scroll(function () {
//    $("section").each(function () {
//      if (
//        $(this).position().top <= $(document).scrollTop() &&
//        $(this).position().top + $(this).outerHeight() > $(document).scrollTop()
//      ) {
//        const currSec =  $(this).attr("id");
//      }
//    });
//  });
// window.addEventListener('scroll' ,()=>{
// //     if(currSec === $(secArray[0]).attr("id")){
// //         buttonPrev.style.display = "none";
// //     }
//     console.log($(secArray[0]).attr("id"));
//     // console.log(currSec);

// });
