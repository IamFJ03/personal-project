// Helper function for querySelector
function qs(selector, all = false) {
  return all
    ? document.querySelectorAll(selector)
    : document.querySelector(selector);
}

// Timeline scroll reveal logic
const sections = qs(".section", true);
const timeline = qs(".timeline");
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

function scrollHandler(e) {
  const { scrollY } = window;
  up = scrollY < prevScrollY;
  down = !up;

  const timelineRect = timeline.getBoundingClientRect();
  const dist = targetY - timelineRect.top;
  console.log(dist);

  sections.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top + item.offsetHeight / 5 < targetY) {
      item.classList.add("show-me");
    } else {
      item.classList.remove("show-me");
    }
  });

  prevScrollY = window.scrollY;
}

// Initial check and scroll binding
scrollHandler();
window.addEventListener("scroll", scrollHandler);

// WhatsApp Button Logic
document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsappBtn");

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function (event) {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        event.preventDefault();
        event.stopPropagation();
        window.open("https://wa.me/917066600054", "_blank"); // Replace with your number
      }
      // Desktop: Bootstrap modal will open via data attributes
    });
  }
});
