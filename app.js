const images = [
  'https://via.placeholder.com/400x250?text=作品1',
  'https://via.placeholder.com/400x250?text=作品2',
  'https://via.placeholder.com/400x250?text=作品3',
  'https://via.placeholder.com/400x250?text=作品4'
];

let currentIndex = 0;
const carouselImages = document.getElementById('carouselImages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(index) {
  carouselImages.innerHTML = '';
  const img = document.createElement('img');
  img.src = images[index];
  img.alt = `作品${index + 1}`;
  img.className = 'carousel-img';
  carouselImages.appendChild(img);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// 自动轮播（可选，5秒切换）
let autoPlay = setInterval(showNext, 5000);

// 鼠标悬停时暂停轮播
carouselImages.addEventListener('mouseenter', () => clearInterval(autoPlay));
carouselImages.addEventListener('mouseleave', () => {
  autoPlay = setInterval(showNext, 5000);
});

// 初始化显示第一张图片
showImage(currentIndex);

// 联系方式按钮
const contactBtn = document.getElementById('contactBtn');
contactBtn.addEventListener('click', () => {
  alert('电子邮箱：con***@example.com');
});
