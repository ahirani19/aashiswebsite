document.addEventListener('DOMContentLoaded', function() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('click', function() {
            // Toggle flipped class for the clicked card
            this.classList.toggle('flipped');
        });
    });
});
