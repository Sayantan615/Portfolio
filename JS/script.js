// Insitializeing AOS for div animations
// AOS.init();

async function updateQuote() {
  const quote = document.querySelector("blockquote p");
  const cite = document.querySelector("blockquote cite");
  // Fetch a random quote from the Quotable API
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    // Update DOM elements
    quote.textContent = `${data.content}`;
    cite.textContent = `- ${data.author}`;
  } else {
    quote.textContent = "An error occured";
    console.log(data);
  }
}
// Random Quate Section
document.addEventListener("DOMContentLoaded", () => {
  // call updateQuote once when page loads
  updateQuote();
});

const randomQ = document.querySelector(".RandomQ");

randomQ.addEventListener("click", () => {
  updateQuote();
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbarNav",
});

// Check if the user is on an Android device
var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;

let destroy = () => {
  document.querySelectorAll("[data-tilt]").forEach((element) => {
    element.vanillaTilt.destroy();
  });
};

let restore = () => {
  document.querySelectorAll("[data-tilt]").forEach((element) => {
    VanillaTilt.init(element);
  });
};

let isOn = true;

document
  .querySelector("#destroy-button")
  .addEventListener("click", function () {
    if (isOn) {
      destroy();
      document.querySelector("#destroy-button").innerHTML =
        '<i class="fa fa-light fa-toggle-off">';
      isOn = false;
    } else {
      document.querySelector("#destroy-button").innerHTML =
        '<i class="fa fa-light fa-toggle-on">';
      restore();
      isOn = true;
    }
  });

// Disable the script on Android devices
if (isAndroid) {
  // Optionally, you can add a message or perform other actions here.
  destroy();
  console.log("Script disabled on Android devices.");
} else {
  // The script will run on non-Android devices
  // Place your script code here
}
