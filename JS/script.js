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

// Can also be included with a regular script tag
let destroyBoxes = document.querySelectorAll("#destroy-box");
let isOn = true;
document
  .querySelector("#destroy-button")
  .addEventListener("click", function () {
    if (isOn)
      destroyBoxes.forEach(function (ele) {
        ele.vanillaTilt.destroy();
        isOn = false;
      });
    else {
      destroyBoxes.forEach(function (ele) {
        VanillaTilt.init(ele);
        isOn = true;
      });
    }
  });
