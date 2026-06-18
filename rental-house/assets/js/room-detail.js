// room-detail.js - render detail page using rooms data and favorites
(function(){
  function getRoomIdFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('room');
  }

  function formatFeatureItem(name, value) {
    return `<span><strong>${name}</strong><em>${value}</em></span>`;
  }

  function renderRoomDetail() {
    const roomId = getRoomIdFromQuery();
    if (!roomId) return;
    const room = window.getRoomById ? window.getRoomById(roomId) : null;
    if (!room) return;

    // populate simple fields
    const detailImage = document.querySelector('.room-detail-page .room-hero-image');
    const detailTitle = document.getElementById('room-title');
    const detailDescription = document.getElementById('room-description');
    const detailPromotion = document.getElementById('room-promotion');
    const detailFullDescription = document.getElementById('room-full-description');
    const detailSummary = document.getElementById('room-summary');
    const detailFeatures = document.getElementById('room-features');
    const detailGallery = document.getElementById('room-gallery');

    if (detailImage) { detailImage.src = room.images[0]; detailImage.alt = room.title; }
    if (detailTitle) detailTitle.textContent = room.title;
    if (detailDescription) detailDescription.textContent = room.description;
    if (detailFullDescription) detailFullDescription.textContent = room.fullDescription;

    if (detailSummary) {
      detailSummary.innerHTML = [
        formatFeatureItem('Giá thuê', room.price),
        formatFeatureItem('Diện tích', room.area),
        formatFeatureItem('Địa chỉ', room.location),
        formatFeatureItem('Loại phòng', room.type)
      ].join('');
    }

    if (detailPromotion) {
      if (room.promotion) {
        detailPromotion.textContent = room.promotion;
        detailPromotion.classList.remove('hidden');
      } else {
        detailPromotion.classList.add('hidden');
      }
    }

    if (detailFeatures) {
      detailFeatures.innerHTML = room.features.map(f=>`<li>${f}</li>`).join('');
    }

    if (detailGallery) {
      detailGallery.innerHTML = room.images.map(i=>`<img src="${i}" alt="${room.title}">`).join('');
    }

    // add favorite button if container exists
    const favContainer = document.getElementById('detail-favorite-container');
    if (favContainer) {
      const btn = document.createElement('button');
      btn.className = 'button detail-favorite-btn';
      btn.dataset.id = room.id;
      // set initial text using favorites API if available
      const fav = window.favorites && window.favorites.is ? window.favorites.is(room.id) : false;
      btn.textContent = fav ? '♥ Đã thích' : '♡ Yêu thích';
      if (fav) btn.classList.add('favorited');
      btn.addEventListener('click', () => {
        if (window.favorites && window.favorites.toggle) window.favorites.toggle(room.id);
      });
      favContainer.appendChild(btn);
    }
  }

  document.addEventListener('DOMContentLoaded', renderRoomDetail);
})();
