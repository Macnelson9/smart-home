'use strict';

// FAQ'S collapse/expand function
document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const faqCard = header.parentElement;
        faqCard.classList.add('active');
        
        // Close other FAQ items
        document.querySelectorAll('.faq-card').forEach(card => {
            if (card !== faqCard) {
                card.classList.remove('active');
            }
        });
    });
});