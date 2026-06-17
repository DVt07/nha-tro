const rooms = [
  {
    id: "daimo-1",
    title: "Can h? d?ch v? cao c?p - S? 36 du?ng Ð?i M?",
    type: "Can h? d?ch v?",
    price: "4.7 tri?u/tháng",
    area: "45 m²",
    location: "Ð?i M?, Hà N?i",
    description: "Can h? d?ch v? cao c?p v?i wifi, máy l?nh, ban công và n?i th?t hi?n d?i. Không gian sáng, riêng tu và d?y d? ti?n ích cho ngu?i di làm.",
    fullDescription: "Can h? d?ch v? cao c?p t?i Ð?i M? mang d?n phòng r?ng rãi, n?i th?t hi?n d?i và ban công thoáng. Phòng du?c trang b? máy l?nh, wifi, t? l?nh, bàn làm vi?c và nhà v? sinh riêng bi?t, phù h?p cho ngu?i di làm ho?c c?p dôi c?n m?t không gian ti?n nghi.",
    features: [
      "Wifi mi?n phí",
      "Máy l?nh",
      "Ban công",
      "Nhà v? sinh riêng",
      "B?p nh?"
    ],
    images: [
      "imgae/d?i m?/(Can h? d?ch v? cao c?p)s? 36 du?ng d?i m?/1.jpg",
      "imgae/d?i m?/(Can h? d?ch v? cao c?p)s? 36 du?ng d?i m?/2.jpg",
      "imgae/d?i m?/(Can h? d?ch v? cao c?p)s? 36 du?ng d?i m?/3.jpg"
    ]
  },
  {
    id: "hoang-gia",
    title: "Hoàng Gia Hotel",
    type: "Khách s?n mini",
    price: "7.2 tri?u/tháng",
    area: "32 m²",
    location: "Hà Ðông, Hà N?i",
    description: "Phòng khách s?n mini sang tr?ng, n?i th?t g?, view d?p và v? trí thu?n ti?n ? Hà Ðông.",
    fullDescription: "Hoàng Gia Hotel mang d?n phòng khách s?n mini ?m cúng v?i n?i th?t g? cao c?p và không gian h?p lý cho ngu?i di làm ho?c c?p dôi. Phòng có ban công nh?, nhi?u ánh sáng t? nhiên, và g?n ch?, siêu th? cùng k?t n?i giao thông thu?n ti?n.",
    features: [
      "Giu?ng dôi",
      "Wifi mi?n phí",
      "Máy l?nh",
      "Tivi",
      "B?n t?m"
    ],
    images: [
      "imgae/hà dông/Hoàng Gia Hotel/1.jpg",
      "imgae/hà dông/Hoàng Gia Hotel/2.jpg",
      "imgae/hà dông/Hoàng Gia Hotel/3.jpg",
      "imgae/hà dông/Hoàng Gia Hotel/4.jpg",
      "imgae/hà dông/Hoàng Gia Hotel/5.jpg"
    ]
  },
  {
    id: "valoria",
    title: "Valoria Premium Hanoi Hotel",
    type: "Khách s?n cao c?p",
    price: "6.5 tri?u/tháng",
    area: "30 m²",
    location: "Hoài Ð?c, Hà N?i",
    description: "Phòng cao c?p v?i ban công, d?ch v? d?n phòng và không gian r?ng rãi.",
    fullDescription: "Valoria Premium Hanoi Hotel cung c?p phòng ng? cao c?p, không gian r?ng thoáng và ti?n nghi d?y d?. Phòng du?c trang b? n?i th?t hi?n d?i, giu?ng êm, phòng t?m ch?t lu?ng và khu v?c làm vi?c thu giãn.",
    features: [
      "Ban công",
      "D?n phòng d?nh k?",
      "Wifi",
      "Tivi",
      "Phòng t?m riêng"
    ],
    images: [
      "imgae/hoài d?c/Valoria Premium Hanoi Hotel/1.jpg",
      "imgae/hoài d?c/Valoria Premium Hanoi Hotel/2.jpg",
      "imgae/hoài d?c/Valoria Premium Hanoi Hotel/3.jpg"
    ]
  },
  {
    id: "dinh-thon",
    title: "Nhà 29 ngõ 67 du?ng Ð?nh Thôn",
    type: "Phòng tr?",
    price: "2.8 tri?u/tháng",
    area: "22 m²",
    location: "Hoài Ð?c, Hà N?i",
    description: "Phòng tr? s?ch, an ninh, g?n ch? và các ti?n ích khu dân cu.",
    fullDescription: "Phòng tr? t?i ngõ 67 Ð?nh Thôn là l?a ch?n ti?t ki?m v?i không gian s?ch s? và an toàn. Phòng có giu?ng, t?, bàn h?c và d? dàng ti?p c?n ch?, c?a hàng ti?n l?i, phù h?p sinh viên ho?c ngu?i di làm.",
    features: [
      "An ninh t?t",
      "G?n ch?",
      "Wifi s?n có",
      "T? qu?n áo",
      "C?a s? thoáng"
    ],
    images: [
      "imgae/hoài d?c/nhà 29 ngõ 67 du?ng d?nh thôn/20260606105307-373b_wm.jpg",
      "imgae/hoài d?c/nhà 29 ngõ 67 du?ng d?nh thôn/20260606105308-3e57_wm.jpg",
      "imgae/hoài d?c/nhà 29 ngõ 67 du?ng d?nh thôn/20260606105309-1d25_wm.jpg"
    ]
  },
  {
    id: "phong-tro-quoc-oai",
    title: "Phòng tr? Qu?c Oai",
    type: "Phòng tr?",
    price: "1.9 tri?u/tháng",
    area: "18 m²",
    location: "Qu?c Oai, Hà N?i",
    description: "Phòng nh? g?n, giá ti?t ki?m, phù h?p sinh viên và ngu?i di làm.",
    fullDescription: "Phòng tr? Qu?c Oai phù h?p ngu?i c?n ch? ? ti?n nghi don gi?n v?i chi phí th?p. Phòng s?ch s?, có d?y d? giu?ng, qu?t và bàn h?c, n?m trong khu dân cu yên tinh.",
    features: [
      "Giá r?",
      "G?n ti?n ích",
      "Phòng riêng",
      "Wifi tùy ch?n",
      "Qu?t tr?n"
    ],
    images: [
      "imgae/qu?c oai/Phòng tr?/1.jpg",
      "imgae/qu?c oai/Phòng tr?/2.jpg",
      "imgae/qu?c oai/Phòng tr?/3.jpg"
    ]
  },
  {
    id: "sinh-hoat-quoc-oai",
    title: "S? nhà 31 ngõ 52 th? tr?n Qu?c Oai",
    type: "Phòng tr?",
    price: "3.1 tri?u/tháng",
    area: "25 m²",
    location: "Qu?c Oai, Hà N?i",
    description: "Phòng m?i r?ng rãi, nhi?u c?a s? và không gian thoáng mát.",
    fullDescription: "Phòng t?i s? nhà 31 ngõ 52 Qu?c Oai có di?n tích r?ng, nhi?u ánh sáng và thi?t k? thoáng. Noi dây phù h?p v?i nhu c?u ? lâu dài và có du?ng vào ti?n l?i.",
    features: [
      "C?a s? l?n",
      "Không gian thoáng",
      "Giá t?t",
      "Thích h?p ? nhóm",
      "Nu?c nóng l?nh"
    ],
    images: [
      "imgae/qu?c oai/s? nhà 31 ngõ 52 th? tr?n qu?c oai/20260607183401-3cff_wm.jpg",
      "imgae/qu?c oai/s? nhà 31 ngõ 52 th? tr?n qu?c oai/20260607183401-f941_wm.jpg",
      "imgae/qu?c oai/s? nhà 31 ngõ 52 th? tr?n qu?c oai/20260607183540-63ad_wm.jpg"
    ]
  }
];

const listingContainer = document.getElementById('listings');
const detailImage = document.querySelector('.room-detail-page .room-hero-image');
const detailTitle = document.getElementById('room-title');
const detailDescription = document.getElementById('room-description');
const detailFullDescription = document.getElementById('room-full-description');
const detailSummary = document.getElementById('room-summary');
const detailFeatures = document.getElementById('room-features');
const detailGallery = document.getElementById('room-gallery');

function formatFeatureItem(name, value) {
  return `<span><strong>${name}</strong><em>${value}</em></span>`;
}

function renderRoomList() {
  if (!listingContainer) return;
  listingContainer.innerHTML = rooms.map(room => {
    return `
      <article class="listing-card">
        <img class="listing-image" src="${room.images[0]}" alt="${room.title}">
        <div class="listing-info">
          <h3>${room.title}</h3>
          <p>${room.description}</p>
          <div class="listing-meta">
            <span><strong>Giá:</strong><em>${room.price}</em></span>
            <span><strong>Di?n tích:</strong><em>${room.area}</em></span>
            <span><strong>Ð?a ch?:</strong><em>${room.location}</em></span>
          </div>
          <div class="listing-tag">${room.type}</div>
          <a class="button" href="room-detail.html?room=${room.id}">Xem chi ti?t</a>
        </div>
      </article>
    `;
  }).join('');
}

function getRoomIdFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return params.get('room');
}

function renderRoomDetail() {
  const roomId = getRoomIdFromQuery();
  if (!roomId) return;

  const room = rooms.find(item => item.id === roomId);
  if (!room) return;

  if (detailImage) detailImage.src = room.images[0];
  if (detailImage) detailImage.alt = room.title;
  if (detailTitle) detailTitle.textContent = room.title;
  if (detailDescription) detailDescription.textContent = room.description;
  if (detailFullDescription) detailFullDescription.textContent = room.fullDescription;

  if (detailSummary) {
    detailSummary.innerHTML = [
      formatFeatureItem('Giá thuê', room.price),
      formatFeatureItem('Di?n tích', room.area),
      formatFeatureItem('Ð?a ch?', room.location),
      formatFeatureItem('Lo?i phòng', room.type)
    ].join('');
  }

  if (detailFeatures) {
    detailFeatures.innerHTML = room.features.map(feature => `<span><strong>•</strong><em>${feature}</em></span>`).join('');
  }

  if (detailGallery) {
    detailGallery.innerHTML = room.images.map(image => `<img src="${image}" alt="${room.title}">`).join('');
  }
}

renderRoomList();
renderRoomDetail();
