// Theme toggle
const themeToggle = document.getElementById("toggle-theme");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// Image slider logic
let currentIndex = 0;
const slides = document.querySelectorAll(".slides img");
const totalSlides = slides.length;

function updateSlide() {
  const slideWidth = slides[0].clientWidth;
  document.querySelector(".slides").style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

document.querySelector(".next")?.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlide();
});

document.querySelector(".prev")?.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlide();
});

window.addEventListener("load", updateSlide);

// Quotes logic
const quotes = [
  `"Isn't it fine if it's just normal?"`,
  `"You seem to misunderstand me a lot."`,
  `"I’m perfectly aware that I’m plain and normal."`,
  `"You're acting like I'm some heroine."`,
  `"I’m just a supporting character, after all."`
];


function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quoteEl = document.getElementById("quote");
  if (quoteEl) quoteEl.textContent = quotes[random];
}

document.getElementById("new-quote")?.addEventListener("click", newQuote);
newQuote();

// Waifu meter
function fillWaifuMeter() {
  const fill = document.getElementById("fill");
  if (fill) fill.style.width = "100%";
}

window.onload = fillWaifuMeter;

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth"
    });
  });
});
window.addEventListener("load", () => {
  updateSlide();
});