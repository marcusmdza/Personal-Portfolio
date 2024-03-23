function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.addEventListener('load', () => {

    window.scrollTo(0, 0);
    
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      document.body.style.overflow = '';

      const loadingScreen = document.querySelector('.loading-page');
      loadingScreen.style.display = 'none';
    }, 4000); // 3s SVG draw + 3s CSS fade-out
  });  

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));