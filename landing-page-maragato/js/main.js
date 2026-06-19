document.addEventListener('DOMContentLoaded', () => {
  const btnHome = document.getElementById('botao-home');
  const mainForm = document.getElementById('main-form');

  if (btnHome) {
    btnHome.addEventListener('click', () => {
      window.open('https://www.instagram.com/adrianwanderbruch/');
    });
  }

  if (mainForm) {
    mainForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Parabéns! Você é um Fusqueiro");
    });
  }
});
