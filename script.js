if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("service-worker.js")
        .then(() => console.log("Service Worker registrado"))
        .catch((err) => console.error("Error registrando el Service Worker", err));
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").then((registration) => {
        registration.addEventListener("updatefound", () => {
            const installingWorker = registration.installing;
            installingWorker.addEventListener("statechange", () => {
                if (installingWorker.state === "activated") {
                    console.log("Nueva versión del Service Worker activada. Recarga para actualizar.");
                    location.reload();
                }
            });
        });
    });
}

const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000, // Duración de las animaciones en ms
        easing: 'ease-in-out', // Efecto de la animación
        once: true, // Ejecutar solo una vez
        mirror: false, // No repetir en scroll hacia arriba
    });
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});
