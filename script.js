const bouton = document.getElementById('bouttonFuyant');

document.addEventListener('mousemove', (souris) => {
  const rect = bouton.getBoundingClientRect();
  const distanceX = souris.clientX - (rect.left + rect.width / 2);
  const distanceY = souris.clientY - (rect.top + rect.height / 2);
  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

  // Vérifie si la souris est à moins de 100 pixels du centre du bouton
  if (distance < 100) {
    // Déplace le bouton à une position aléatoire
    const randomX = Math.random() * (window.innerWidth - rect.width);
    const randomY = Math.random() * (window.innerHeight - rect.height);
    bouton.style.left = randomX + 'px';
    bouton.style.top = randomY + 'px';
  }
});