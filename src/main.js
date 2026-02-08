import "./styles/main.css";

import { initStatsCounter } from "./animations/statsCounter.js";
import { initLanguageToggle } from "./lang.js";
import { initGsapEntrances } from "./animations/gsapEntrances.js";
import { initMobileNav } from "./mobileNav.js";
import { initScrollAnimations } from "./animations/scrollAnimations.js";

initLanguageToggle();
initGsapEntrances();
initStatsCounter();
initMobileNav();
initScrollAnimations();

// FAQ Accordion — FIXED
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  if (!questions.length) {
    console.warn("FAQ: no questions found");
    return;
  }

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");

      // close others (optional, keeps it clean)
      document.querySelectorAll(".faq-item").forEach((i) => {
        if (i !== item) i.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
});