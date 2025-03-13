// fixed nav
let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  let scrolValue = Math.floor(window.scrollY);
  if (scrolValue > 180) {
    nav.classList.add("absolut");
  } else {
    nav.classList.remove("absolut");
  }
});

// designer experiance counter-------
$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

// testimonials slick-----------
$(function () {
  $(".profession_slick").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });
});

// data aos--------------
AOS.init();

// masionary filter (mixitup)------------
$(".imgMain").mixItUp({
  selectors: {
    target: ".tile",
    filter: ".filter",
    sort: ".sort-btn",
  },
  animation: {
    animateResizeContainer: false,
    effects: "fade scale",
  },
});

// to-top progresss-------------
const scrollPercentage = () => {
  const scrollProgress = document.querySelector(".progress_value");
  // const progressValue = document.querySelector(".progress_value");
  const pos = document.documentElement.scrollTop;
  const calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollValue = Math.round((pos * 100) / calcHeight);
  scrollProgress.style.background = `linear-gradient(#fff ${scrollValue}%, #777 ${scrollValue}%)`;
};
window.onscroll = scrollPercentage;

//   cuesor style--------------------------
let cursor = document.querySelector(".cursor");
let cursorScale = document.querySelectorAll(".cursor-scale");

document.onmousemove = function (m) {
  cursor.style.left = m.pageX + "px";
  cursor.style.top = m.pageY + "px";
};
cursorScale.forEach((link) => {
  link.addEventListener("mousemove", () => {
    cursor.classList.add("grow");
    if (link.classList.contains("small")) {
      cursor.classList.remove("grow");
      cursor.classList.add("grow-small");
    }
  });
  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("grow");
    cursor.classList.remove("grow-small");
  });
});

// JS.tilt-----------------
$(".js-tilt").tilt({
  maxTilt: 20,
  perspective: 5000, // Transform perspective, the lower the more extreme the tilt gets.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 300, // Speed of the enter/exit transition.
  transition: true, // Set a transition on enter/exit.
  disableAxis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  glare: true, // Enables glare effect
  maxGlare: 1, // From 0 - 1.
});

// portfolio cursor listener
let innerS = document.querySelectorAll(".inner");
let inner_title = document.querySelectorAll(".inner_title");
let innerArray = Array.from(inner_title);
innerS.forEach((inner, innIndex) => {
  inner.addEventListener("mousemove", function (e) {
    let pElement = innerArray[innIndex].parentElement;
    let pElementArray = Array.from(pElement.querySelectorAll(".inner_title"));
    pElementArray.map((elected) => {
      elected.style.left = e.pageX + "px";
      elected.style.top = e.pageY + "px";
    });
  });
});
// Skill levels (in percentage)
const skills = {
  "illustrator-bar": 80,
  "photoshop-bar": 90,
  "figma-bar": 70,
};

function animateProgressBars() {
  Object.keys(skills).forEach((id) => {
    let progressBar = document.getElementById(id);
    let targetWidth = skills[id];
    let currentWidth = 0;

    let interval = setInterval(() => {
      if (currentWidth >= targetWidth) {
        clearInterval(interval);
      } else {
        currentWidth++;
        progressBar.style.width = currentWidth + "%";
        progressBar.textContent = currentWidth + "%";
      }
    }, 15); // Speed of animation
  });
}

// Run animation when the page loads
document.addEventListener("DOMContentLoaded", animateProgressBars);
