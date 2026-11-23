import { Game } from './game.js';

const canvas = document.getElementById('game');
const startBtn = document.getElementById('start-btn');
const loading = document.getElementById('loading');
const resumeBtn = document.getElementById('resume-btn');
let game = null;

function fail(message) {
  if (loading) {
    loading.classList.remove('hidden');
    loading.textContent = 'ОШИБКА: ' + message;
    loading.style.color = '#d06a52';
  }
  console.error(message);
}

function boot() {
  try {
    game = new Game(canvas);
    window.__game = game;
    if (loading) loading.classList.add('hidden');
    startBtn.disabled = false;
  } catch (err) {
    console.error(err);
    fail(err?.message || 'не удалось запустить рендерер');
  }
}

// let the loading screen paint before the heavy procedural build
requestAnimationFrame(() => requestAnimationFrame(boot));

startBtn?.addEventListener('click', () => {
  if (!game) return;
  document.body.classList.add('playing');
  game.start();
});

resumeBtn?.addEventListener('click', () => {
  canvas.requestPointerLock?.();
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'Enter' && game && !game.started) {
    document.body.classList.add('playing');
    game.start();
  }
});

// prevent iOS double-tap zoom / scroll gestures while playing
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('touchmove', (e) => {
  if (document.body.classList.contains('playing')) e.preventDefault();
}, { passive: false });
