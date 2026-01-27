function nextPage(pageId) {
    // Buscamos todas las páginas y quitamos la clase activa
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Mostramos la página que queremos
    document.getElementById('p' + pageId).classList.add('active');
}

function celebrate() {
    // Ir a la página final
    nextPage(5);

    // Iniciar lluvia de corazones
    setInterval(createHeart, 250);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Variedad de corazones
    const types = ['❤️', '💖', '💘', '💕', '🌸'];
    heart.innerHTML = types[Math.floor(Math.random() * types.length)];
    
    // Posición aleatoria
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Velocidad aleatoria entre 3 y 5 segundos
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    
    document.body.appendChild(heart);

    // Eliminar el corazón cuando termine de caer para no saturar la memoria
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
