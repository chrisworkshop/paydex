document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Logic for placeholder images
    const placeholders = document.querySelectorAll('.image-placeholder');
    placeholders.forEach(placeholder => {
        const img = placeholder.querySelector('img');
        const span = placeholder.querySelector('span');
        
        if (img) {
            // Se l'immagine viene caricata correttamente, nasconde il placeholder testuale
            img.addEventListener('load', function() {
                this.style.display = 'block';
                if(span) span.style.display = 'none';
                placeholder.style.border = 'none';
                placeholder.style.backgroundColor = 'transparent';
                placeholder.style.padding = '0';
            });

            // Se l'immagine fallisce il caricamento, mantiene il placeholder visibile con indicazione TODO
            img.addEventListener('error', function() {
                this.style.display = 'none';
                if(span) span.style.display = 'block';
            });
            
            // Forza il trigger per vedere se l'immagine è in cache
            if(img.complete) {
                img.dispatchEvent(new Event(img.naturalWidth === 0 ? 'error' : 'load'));
            }
        }
    });
});