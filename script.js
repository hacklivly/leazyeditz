// Ensure script runs only in browser environment
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Dark/Light Mode Toggle
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
      });
    } else {
      console.warn('Element with ID "theme-toggle" not found.');
    }

    // Scroll Animations
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.fade-in, .slide-in').forEach(element => {
        observer.observe(element);
      });
    } else {
      // Fallback for browsers without IntersectionObserver
      document.querySelectorAll('.fade-in, .slide-in').forEach(element => {
        element.classList.add('visible');
      });
    }
  });
}
