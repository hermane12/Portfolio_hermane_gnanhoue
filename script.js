document.addEventListener("DOMContentLoaded", function () {
  const progressBars = document.querySelectorAll(".progress");

  // Fonction pour lancer l’animation de progression
  function animateProgress() {
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute("data-width") || bar.style.width;
      bar.style.width = "0"; // Réinitialise
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 300);
    });
  }

  // Déclencher l'animation si les barres sont visibles
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  }

  function handleScroll() {
    progressBars.forEach(bar => {
      if (isInViewport(bar)) {
        const targetWidth = bar.getAttribute("data-width");
        if (targetWidth) {
          bar.style.width = targetWidth;
          bar.removeAttribute("data-width"); // Pour éviter de répéter l'animation
        }
      }
    });
  }

  // Ajout de l’attribut data-width pour gérer dynamiquement l’animation
  progressBars.forEach(bar => {
    const target = bar.style.width;
    bar.setAttribute("data-width", target);
    bar.style.width = "0";
  });

  // Écoute du scroll
  window.addEventListener("scroll", handleScroll);

  // Lancer une fois au chargement si visible
  handleScroll();
});