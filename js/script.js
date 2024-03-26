///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Share website button
const shareButton = document.getElementById("answer-example-share-button");
shareButton.addEventListener("click", (e) => {
  if (navigator.share) {
    navigator
      .share({
        title: "Web Share API Draft",
        text: "Take a look at this spec!",
        url: "https://wicg.github.io/web-share/#share-method",
      })
      .then(() => console.log("Successful share"))
      .catch((error) => console.log("Error sharing", error));
  } else {
    console.log("Share not supported on this browser, do it the old way.");
  }
});
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Website Counter
const url = "https://counter10.p.rapidapi.com/?COLOR=red&CLABEL=blue";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0b0cf9bb7fmsh549750952831056p125eb8jsn407f1a77665c",
    "X-RapidAPI-Host": "counter10.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
///////////////////////////////////////////////////////////

const popoverEl = document.getElementById("popover");
const popover = new bootstrap.Popover(popoverEl);

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);

const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// leaflet map requirements
var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS popup.<br> Easily customizable.")
  .openPopup();

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// open image
function showMyImage() {
  var img = document.getElementById("image-holder");
  img.src = "http://www.your-site.com/images/picture.jpg";
  img.style.display = "block";
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// SLIDE CARASOUL
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
