function openDoor() {
    document.querySelector('.left-door').style.transform = 'rotateY(-90deg)';
    document.querySelector('.right-door').style.transform = 'rotateY(90deg)';

    setTimeout(() => {
        document.getElementById('poem-container').classList.add('show');
        startHeartAnimation();
    }, 2000);
}

function startHeartAnimation() {
    setInterval(() => {
        createHeart();
    }, 300); // Ahora aparecen corazones cada 300ms
}

function createHeart() {
    const container = document.querySelector('.hearts-container');
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    // Posición aleatoria en la parte inferior de la pantalla
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px'; // Empieza un poco más abajo del borde

    // Tamaño aleatorio de los corazones
    let size = Math.random() * 20 + 10; // Entre 10px y 30px
    heart.style.fontSize = size + 'px';

    // Animación con duración aleatoria
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Entre 2s y 5s

    container.appendChild(heart);

    // Eliminar corazones después de que terminen su animación
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
