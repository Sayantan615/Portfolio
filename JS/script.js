
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

// Random Quate Section
document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  // const button = document.querySelector("button");
  const quote = document.querySelector("blockquote p");
  const cite = document.querySelector("blockquote cite");

  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = `" ${data.content} "`;
      cite.textContent = `- ${data.author}`;
    } else {
      quote.textContent = "An error occured";
      console.log(data);
    }
  }
  // call updateQuote once when page loads
  updateQuote();
});

// Can also be included with a regular script tag
