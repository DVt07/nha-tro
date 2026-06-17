const rooms = [
  {
    id: "daimo-1",
    title: "Căn hộ dịch vụ cao cấp - Số 36 đường Đại Mỗ",
    type: "Căn hộ dịch vụ",
    price: "4.7 triệu/tháng",
    area: "45 m²",
    location: "Đại Mỗ, Hà Nội",
    description: "Căn hộ dịch vụ cao cấp với wifi, máy lạnh, ban công và nội thất hiện đại. Không gian sáng, riêng tư và đầy đủ tiện ích cho người đi làm.",
    fullDescription: "Căn hộ dịch vụ cao cấp tại Đại Mỗ mang đến phòng rộng rãi, nội thất hiện đại và ban công thoáng. Phòng được trang bị máy lạnh, wifi, tủ lạnh, bàn làm việc và nhà vệ sinh riêng biệt, phù hợp cho người đi làm hoặc cặp đôi cần một không gian tiện nghi.",
    features: [
      "Wifi miễn phí",
      "Máy lạnh",
      "Ban công",
      "Nhà vệ sinh riêng",
      "Bếp nhỏ"
    ],
    images: [
      "imgae/đại mỗ/(Căn hộ dịch vụ cao cấp)số 36 đường đại mỗ/1.jpg",
      "imgae/đại mỗ/(Căn hộ dịch vụ cao cấp)số 36 đường đại mỗ/2.jpg",
      "imgae/đại mỗ/(Căn hộ dịch vụ cao cấp)số 36 đường đại mỗ/3.jpg"
    ]
  },
  {
    id: "hoang-gia",
    title: "Hoàng Gia Hotel",
    type: "Khách sạn mini",
    price: "7.2 triệu/tháng",
    area: "32 m²",
    location: "Hà Đông, Hà Nội",
    description: "Phòng khách sạn mini sang trọng, nội thất gỗ, view đẹp và vị trí thuận tiện ở Hà Đông.",
    fullDescription: "Hoàng Gia Hotel mang đến phòng khách sạn mini ấm cúng với nội thất gỗ cao cấp và không gian hợp lý cho người đi làm hoặc cặp đôi. Phòng có ban công nhỏ, nhiều ánh sáng tự nhiên, và gần chợ, siêu thị cùng kết nối giao thông thuận tiện.",
    features: [
      "Giường đôi",
      "Wifi miễn phí",
      "Máy lạnh",
      "Tivi",
      "Bồn tắm"
    ],
    images: [
      "imgae/hà đông/Hoàng Gia Hotel/1.jpg",
      "imgae/hà đông/Hoàng Gia Hotel/2.jpg",
      "imgae/hà đông/Hoàng Gia Hotel/3.jpg",
      "imgae/hà đông/Hoàng Gia Hotel/4.jpg",
      "imgae/hà đông/Hoàng Gia Hotel/5.jpg"
    ]
  },
  {
    id: "valoria",
    title: "Valoria Premium Hanoi Hotel",
    type: "Khách sạn cao cấp",
    price: "6.5 triệu/tháng",
    area: "30 m²",
    location: "Hoài Đức, Hà Nội",
    description: "Phòng cao cấp với ban công, dịch vụ dọn phòng và không gian rộng rãi.",
    fullDescription: "Valoria Premium Hanoi Hotel cung cấp phòng ngủ cao cấp, không gian rộng thoáng và tiện nghi đầy đủ. Phòng được trang bị nội thất hiện đại, giường êm, phòng tắm chất lượng và khu vực làm việc thư giãn.",
    features: [
      "Ban công",
      "Dọn phòng định kỳ",
      "Wifi",
      "Tivi",
      "Phòng tắm riêng"
    ],
    images: [
      "imgae/hoài đức/Valoria Premium Hanoi Hotel/1.jpg",
      "imgae/hoài đức/Valoria Premium Hanoi Hotel/2.jpg",
      "imgae/hoài đức/Valoria Premium Hanoi Hotel/3.jpg"
    ]
  },
  {
    id: "dinh-thon",
    title: "Nhà 29 ngõ 67 đường Định Thôn",
    type: "Phòng trọ",
    price: "2.8 triệu/tháng",
    area: "22 m²",
    location: "Hoài Đức, Hà Nội",
    description: "Phòng trọ sạch, an ninh, gần chợ và các tiện ích khu dân cư.",
    fullDescription: "Phòng trọ tại ngõ 67 Định Thôn là lựa chọn tiết kiệm với không gian sạch sẽ và an toàn. Phòng có giường, tủ, bàn học và dễ dàng tiếp cận chợ, cửa hàng tiện lợi, phù hợp sinh viên hoặc người đi làm.",
    features: [
      "An ninh tốt",
      "Gần chợ",
      "Wifi sẵn có",
      "Tủ quần áo",
      "Cửa sổ thoáng"
    ],
    images: [
      "imgae/hoài đức/nhà 29 ngõ 67 đường định thôn/20260606105307-373b_wm.jpg",
      "imgae/hoài đức/nhà 29 ngõ 67 đường định thôn/20260606105308-3e57_wm.jpg",
      "imgae/hoài đức/nhà 29 ngõ 67 đường định thôn/20260606105309-1d25_wm.jpg"
    ]
  },
  {
    id: "phong-tro-quoc-oai",
    title: "Phòng trọ Quốc Oai",
    type: "Phòng trọ",
    price: "1.9 triệu/tháng",
    area: "18 m²",
    location: "Quốc Oai, Hà Nội",
    description: "Phòng nhỏ gọn, giá tiết kiệm, phù hợp sinh viên và người đi làm.",
    fullDescription: "Phòng trọ Quốc Oai phù hợp người cần chỗ ở tiện nghi đơn giản với chi phí thấp. Phòng sạch sẽ, có đầy đủ giường, quạt và bàn học, nằm trong khu dân cư yên tĩnh.",
    features: [
      "Giá rẻ",
      "Gần tiện ích",
      "Phòng riêng",
      "Wifi tùy chọn",
      "Quạt trần"
    ],
    images: [
      "imgae/quốc oai/Phòng trọ/1.jpg",
      "imgae/quốc oai/Phòng trọ/2.jpg",
      "imgae/quốc oai/Phòng trọ/3.jpg"
    ]
  },
  {
    id: "sinh-hoat-quoc-oai",
    title: "Số nhà 31 ngõ 52 thị trấn Quốc Oai",
    type: "Phòng trọ",
    price: "3.1 triệu/tháng",
    area: "25 m²",
    location: "Quốc Oai, Hà Nội",
    description: "Phòng mới rộng rãi, nhiều cửa sổ và không gian thoáng mát.",
    fullDescription: "Phòng tại số nhà 31 ngõ 52 Quốc Oai có diện tích rộng, nhiều ánh sáng và thiết kế thoáng. Nơi đây phù hợp với nhu cầu ở lâu dài và có đường vào tiện lợi.",
    features: [
      "Cửa sổ lớn",
      "Không gian thoáng",
      "Giá tốt",
      "Thích hợp ở nhóm",
      "Nước nóng lạnh"
    ],
    images: [
      "imgae/quốc oai/số nhà 31 ngõ 52 thị trấn quốc oai/20260607183401-3cff_wm.jpg",
      "imgae/quốc oai/số nhà 31 ngõ 52 thị trấn quốc oai/20260607183401-f941_wm.jpg",
      "imgae/quốc oai/số nhà 31 ngõ 52 thị trấn quốc oai/20260607183540-63ad_wm.jpg"
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
            <span><strong>Diện tích:</strong><em>${room.area}</em></span>
            <span><strong>Địa chỉ:</strong><em>${room.location}</em></span>
          </div>
          <div class="listing-tag">${room.type}</div>
          <a class="button" href="room-detail.html?room=${room.id}">Xem chi tiết</a>
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
      formatFeatureItem('Diện tích', room.area),
      formatFeatureItem('Địa chỉ', room.location),
      formatFeatureItem('Loại phòng', room.type)
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
