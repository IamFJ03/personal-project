// Helper function for querySelector
function qs(selector, all = false) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

// Timeline scroll reveal logic
const sections = qs(".section", true);
const timeline = qs(".timeline");
let prevScrollY = window.scrollY;
let targetY = window.innerHeight * 0.8;

function scrollHandler() {
  const scrollY = window.scrollY;
  const up = scrollY < prevScrollY;

  const timelineRect = timeline.getBoundingClientRect();
  const dist = targetY - timelineRect.top;
  console.log("Timeline distance from target:", dist);

  sections.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add("show-me");
    } else {
      item.classList.remove("show-me");
    }
  });

  prevScrollY = scrollY;
}

// Initial check and scroll binding
scrollHandler();
window.addEventListener("scroll", scrollHandler);

// WhatsApp Button Logic
document.addEventListener("DOMContentLoaded", function () {
  const mobileBtn = document.getElementById("whatsappBtnMobile");

  if (mobileBtn) {
    mobileBtn.addEventListener("click", function () {
      // Direct WhatsApp chat on mobile
      window.open("https://wa.me/917066600054", "_blank");
    });
  }

  // No JS needed for desktop modal button — Bootstrap handles it via data attributes
});
