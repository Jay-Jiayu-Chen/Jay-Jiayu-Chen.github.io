// Stagger the fade-in animation across sections.
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.1}s`;
  });
});
