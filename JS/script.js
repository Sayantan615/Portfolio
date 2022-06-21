// Cursor Progress bar Script
//Document Object Model(DOM)
let CursorMeter = document.getElementById("CursorMeter");
document.addEventListener("mousemove", function (e) {
  CursorMeter.style.top = e.clientY + "px";
  CursorMeter.style.left = e.clientX + "px";
});

let persent = document.getElementById("persent");
let progressBar = document.getElementById("progressBar");

let totalHeight = document.body.scrollHeight - window.innerHeight;
//** windows.scroll */
window.onscroll = function () {
  let progress = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.width = progress + "%";
  persent.innerHTML = "Page Scrolled " + Math.round(progress) + "%";
};

const menu_toggler = document.querySelector(".menu-toggler");
const navigation = document.querySelector(".Navigation");
menu_toggler.onclick = function () {
  navigation.classList.toggle("active");
};

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//* Script for Auto-Height */
var setElementHeight = function () {
  var height = $(window).height();
  $(".autoheight").css("min-height", height);
};

$(window)
  .on("resize", function () {
    setElementHeight();
  })
  .resize();