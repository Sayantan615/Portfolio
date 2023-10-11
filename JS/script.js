// Insitializeing AOS for div animations

// async function updateQuote() {
//   const quote = document.querySelector("blockquote p");
//   const cite = document.querySelector("blockquote cite");
//   // Fetch a random quote from the Quotable API
//   const response = await fetch("https://api.quotable.io/random");
//   const data = await response.json();
//   if (response.ok) {
//     // Update DOM elements
//     quote.textContent = `${data.content}`;
//     cite.textContent = `- ${data.author}`;
//   } else {
//     quote.textContent = "An error occured";
//     console.log(data);
//   }
// }
// // Random Quate Section
// document.addEventListener("DOMContentLoaded", () => {
//   // call updateQuote once when page loads
//   updateQuote();
// });

// const randomQ = document.querySelector(".RandomQ");

// randomQ.addEventListener("click", () => {
//   updateQuote();
// });

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbarNav",
});

// Check if the user is on an Android device
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;

let destroy = () => {
  document.querySelectorAll("[data-animation-off]").forEach((element) => {
    element.vanillaTilt.destroy();
  });
};

let restore = () => {
  document.querySelectorAll("[data-animation-off]").forEach((element) => {
    VanillaTilt.init(element);
  });
};

// Disable the script on Android devices
if (isAndroid) {
  // Optionally, you can add a message or perform other actions here.
  destroy();
  console.log("Script disabled on Android devices.");
} else {
  // The script will run on non-Android devices
  // Place your script code here
  restore();
}

let customeColorPropartys = [
  ["font", "dark-font"],
  ["heading", "dark-heading"],
  ["pop", "dark-pop"],
  ["shadow", "dark-shadow"],
  ["background", "dark-background"],
  ["second-pop", "dark-second-pop"],
];
const changeMode = () => {
  const customVals = document.documentElement;
  customeColorPropartys.forEach((colors) => {
    let colorSelector1 = getComputedStyle(customVals).getPropertyValue(
      `--${colors[0]}-color`
    );
    let colorSelector2 = getComputedStyle(customVals).getPropertyValue(
      `--${colors[1]}-color`
    );
    console.log(colorSelector1, colorSelector2);
    customVals.style.setProperty(`--${colors[0]}-color`, colorSelector2);
    customVals.style.setProperty(`--${colors[1]}-color`, colorSelector1);
  });
};

let isOn = true;

document.querySelector("#theme-button").addEventListener("click", function () {
  if (isOn) {
    document.querySelector("#theme-button").innerHTML =
      '<i class="fa-solid fa-sun"></i>';
    isOn = false;
    changeMode();
  } else {
    document.querySelector("#theme-button").innerHTML =
      '<i class="fa-solid fa-sun"></i>';
    isOn = true;
    changeMode();
  }
});

const fullviewbtn = document.querySelectorAll(".fullviewbtn");
const fullview_container = document.querySelectorAll(".fullview_container");
const closeviewbtn = document.querySelectorAll(".closeviewbtn");
fullviewbtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    fullview_container[index].style.display = "flex";
  });
  closeviewbtn[index].addEventListener("click", () => {
    fullview_container[index].style.display = "none";
  });
});

// changeMode();
let startingdelay = 300;
const pdivs = document.querySelectorAll(".p_div");
pdivs.forEach((ele) => {
  ele.setAttribute("data-aos", "fade-right");
  ele.setAttribute("data-aos-once", "true");
  ele.setAttribute("data-aos-delay", `${startingdelay}`);
  startingdelay += 300;
});
const headings = document.querySelectorAll(".p_heading");

const even_years = document.querySelectorAll(".event_year");
const sub_events = document.querySelectorAll(".sub_events");
const stones = document.querySelectorAll(".stone");

let delay = 300;
even_years.forEach((ele, index) => {
  ele.setAttribute("data-aos", "fade-up");
  ele.setAttribute("data-aos-delay", `${delay}`);
  ele.setAttribute("data-aos-once", "true");
  sub_events[index].setAttribute("data-aos", "fade-up");
  sub_events[index].setAttribute("data-aos-delay", `${delay}`);
  sub_events[index].setAttribute("data-aos-once", "true");
  stones[index].setAttribute("data-aos", "fade-up");
  stones[index].setAttribute("data-aos-delay", `${delay}`);
  stones[index].setAttribute("data-aos-once", "true");
  delay = delay + 50;
});

const profile_picture_button = document.querySelector(".navbar-brand");
const pop_up_image = document.querySelector(".pop_up_image");
let show = false;
profile_picture_button.addEventListener("click", () => {
  console.log("clicked");
  if (!show) {
    pop_up_image.style.display = "flex";
    show = true;
  } else {
    show = false;
    pop_up_image.style.display = "none";
  }
});
