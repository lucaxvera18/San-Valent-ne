function nextPage(pageNum) {
    // Oculta todas las páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Muestra la página solicitada
    document.getElementById('p' + pageNum).classList.add('active');
}

function celebrate() {
    // Ir a la página final de confirmación
    nextPage(5);
    
    // Crear lluvia de corazones constante
    setInterval(createHeart, 300);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('floating-heart');
    
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.zIndex = '9999';
    
    // Animación de caída
    const duration = Math.random() * 3 + 2;
    heart.style.transition = `transform ${duration}s linear, opacity ${duration}s`;
    
    document.body.appendChild(heart);

    // Animamos con un timeout pequeño para que el navegador registre el cambio
    setTimeout(() => {
        heart.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = '0';
    }, 100);

    // Limpiamos el corazón después de que caiga
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
