const elements = document.querySelectorAll('[data-anim]');

export default function scrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-visible');
      }
      // else {
      //   entry.target.classList.remove('anim-visible');
      // }
    });
  });

  elements.forEach((element) => observer.observe(element));
}
