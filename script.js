document.addEventListener('DOMContentLoaded', function() {
  const logInButton = document.querySelector('.login');
  const exploreText = document.querySelector('.content h1');
  
  // Adicionar movimento ao botão de Log In
  logInButton.addEventListener('mouseover', function() {
    logInButton.style.transform = 'scale(1.1) rotate(5deg)';
  });

  logInButton.addEventListener('mouseout', function() {
    logInButton.style.transform = 'scale(1) rotate(0deg)';
  });

  // Adicionar movimento ao texto "Explore o Destino dos Sonhos"
  function animateText() {
    exploreText.style.transform = `translateY(${Math.sin(Date.now() / 500) * 10}px)`;
    requestAnimationFrame(animateText);
  }

  animateText();
});
