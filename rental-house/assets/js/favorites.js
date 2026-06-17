// favorites.js - manage favorites with localStorage
const FAVORITES_KEY = 'nhatro_favorites_v1';

function getFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveFavorites(list) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(new Set(list))));
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function addFavorite(id) {
  const list = getFavorites();
  if (!list.includes(id)) {
    list.push(id);
    saveFavorites(list);
    updateFavoriteButtons(id, true);
  }
}

function removeFavorite(id) {
  let list = getFavorites();
  list = list.filter(x => x !== id);
  saveFavorites(list);
  updateFavoriteButtons(id, false);
}

function toggleFavorite(id) {
  if (isFavorite(id)) removeFavorite(id); else addFavorite(id);
}

function updateFavoriteButtons(id, state) {
  // update all buttons with data-id
  document.querySelectorAll(`.favorite-btn[data-id="${id}"]`).forEach(btn => {
    btn.setAttribute('aria-pressed', state ? 'true' : 'false');
    btn.textContent = state ? '♥ Đã thích' : '♡ Yêu thích';
    if (state) btn.classList.add('favorited'); else btn.classList.remove('favorited');
  });
  // also update detail page favorite if present
  const detBtn = document.querySelector('.detail-favorite-btn');
  if (detBtn && detBtn.dataset.id === id) {
    detBtn.setAttribute('aria-pressed', state ? 'true' : 'false');
    detBtn.textContent = state ? '♥ Đã thích' : '♡ Yêu thích';
    if (state) detBtn.classList.add('favorited'); else detBtn.classList.remove('favorited');
  }
}

// initialize favorite buttons on page load
function initFavoriteUI() {
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.favorite-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    if (!id) return;
    toggleFavorite(id);
  });

  // set initial states
  const favs = getFavorites();
  document.querySelectorAll('.favorite-btn').forEach(btn => {
    const id = btn.dataset.id;
    const state = favs.includes(id);
    btn.setAttribute('aria-pressed', state ? 'true' : 'false');
    btn.textContent = state ? '♥ Đã thích' : '♡ Yêu thích';
    if (state) btn.classList.add('favorited');
  });
}

// expose API
window.favorites = {
  get: getFavorites,
  is: isFavorite,
  add: addFavorite,
  remove: removeFavorite,
  toggle: toggleFavorite
};

// auto-init
document.addEventListener('DOMContentLoaded', initFavoriteUI);
