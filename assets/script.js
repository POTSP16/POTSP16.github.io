// pan od techniki — wspólny skrypt

document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle
  const burger = document.querySelector('.tb-burger');
  const nav = document.querySelector('.tb-nav');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
  }
});
