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
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-50px';

    let size = Math.random() * 20 + 10;
    heart.style.fontSize = size + 'px';

    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function mostrarMensaje() {
    document.getElementById('mensaje-secreto').style.display = 'block';
}
