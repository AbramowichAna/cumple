// Lanzar confetti
confetti({
  particleCount: 150,
  spread: 70,
  origin: { y: 0.6 }
});

// Mostrar la pregunta después de 3 segundos
setTimeout(() => {
  document.getElementById('pregunta').style.display = 'block';
  document.getElementById('entrada').style.display = 'inline';
}, 3000);

