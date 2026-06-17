// filters.js - wire compact filters to renderRoomList
document.addEventListener('DOMContentLoaded', () => {
  const priceSelect = document.getElementById('price-select');
  const locationSelect = document.getElementById('location-select');
  const typePills = Array.from(document.querySelectorAll('.type-pill'));
  let searchInput = document.querySelector('.search-box input[type="search"]');
  if (!searchInput) searchInput = document.querySelector('.search-bar input[type="search"]');

  function parsePriceValue(priceStr) {
    if (!priceStr) return 0;
    // extract number from strings like "15 triệu/tháng" or "7  triệu/tháng"
    const n = priceStr.replace(/[^0-9\.]/g,'');
    return n ? parseFloat(n) : 0;
  }

  function applyFilters() {
    let filtered = window.rooms ? window.rooms.slice() : [];

    // location filter
    const loc = locationSelect ? locationSelect.value : 'all';
    if (loc && loc !== 'all' && loc !== 'toan-ha-noi') {
      filtered = filtered.filter(r => {
        if (!r.location) return false;
        return r.location.toLowerCase().includes(loc.replace(/-/g,' '));
      });
    }

    // price filter
    const price = priceSelect ? priceSelect.value : 'all';
    if (price && price !== 'all') {
      filtered = filtered.filter(r => {
        const val = parsePriceValue(r.price);
        if (price === 'under-2') return val < 2;
        if (price === '2-4') return val >= 2 && val <= 4;
        if (price === 'over-4') return val > 4;
        return true;
      });
    }

    // type filter
    const activeType = (typePills.find(p=>p.classList.contains('active'))||{textContent:'Tất cả'}).textContent.trim();
    if (activeType && activeType !== 'Tất cả') {
      const key = activeType.toLowerCase();
      filtered = filtered.filter(r => r.type && r.type.toLowerCase().includes(key));
    }

    // search filter
    const q = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (q) {
      filtered = filtered.filter(r => (r.title && r.title.toLowerCase().includes(q)) || (r.location && r.location.toLowerCase().includes(q)));
    }

    if (window.renderRoomList) window.renderRoomList(filtered);

    // update favorite button states (favorites script listens for DOMContentLoaded only), so call update manually
    if (window.favorites) {
      // set states for buttons present
      const favs = window.favorites.get ? window.favorites.get() : [];
      document.querySelectorAll('.favorite-btn').forEach(btn=>{
        const id = btn.dataset.id;
        const state = favs.includes(id);
        btn.setAttribute('aria-pressed', state? 'true':'false');
        btn.textContent = state ? '♥ Đã thích' : '♡ Yêu thích';
        if (state) btn.classList.add('favorited'); else btn.classList.remove('favorited');
      });
    }
  }

  // events
  if (priceSelect) priceSelect.addEventListener('change', applyFilters);
  if (locationSelect) locationSelect.addEventListener('change', applyFilters);
  typePills.forEach(p=>p.addEventListener('click', e=>{
    typePills.forEach(x=>x.classList.remove('active'));
    e.currentTarget.classList.add('active');
    applyFilters();
  }));
  if (searchInput) {
    searchInput.addEventListener('input', debounce(applyFilters, 250));
  }

  // simple debounce
  function debounce(fn, ms){
    let t;
    return (...a)=>{ clearTimeout(t); t = setTimeout(()=>fn(...a), ms); };
  }

  // initial apply
  applyFilters();
});
