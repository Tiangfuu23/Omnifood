"use strict";
// Dynamically change the year in footer section
const currentYear = new Date().getFullYear();
document.querySelector(".year").textContent = currentYear;
// Make mobile Navigation Work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  console.log("RUN");
});
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile navigation
    if (link.classList.contains("header--btn")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
// Sticky Navgiation
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      //console.log("Hello");
      document.querySelector(".header").classList.add("sticky");
      document
        .querySelector(".section-hero")
        .classList.add("header-sticky-nav");
    } else {
      document.querySelector(".header").classList.remove("sticky");
      document
        .querySelector(".section-hero")
        .classList.remove("header-sticky-nav");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
