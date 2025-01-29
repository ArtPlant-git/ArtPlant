// gallery.js - 이미지 클릭 시 확대 기능
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
      img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<img src="${img.src}" alt="확대 이미지">
                           <span class="close">&times;</span>`;
        document.body.appendChild(modal);
        modal.querySelector('.close').addEventListener('click', () => {
          modal.remove();
        });
      });
    });
  });