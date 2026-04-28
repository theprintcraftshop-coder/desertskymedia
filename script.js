const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const expanded = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(expanded));
  });
}

const reveals = document.querySelectorAll(".reveal");

if (reveals.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  reveals.forEach(block => observer.observe(block));
}
