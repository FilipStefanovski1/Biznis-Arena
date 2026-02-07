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