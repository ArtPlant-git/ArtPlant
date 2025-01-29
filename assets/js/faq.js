// faq.js - FAQ 토글 기능
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
        const answer = item.querySelector('.faq-answer');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });
  });