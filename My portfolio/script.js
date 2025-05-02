// JavaScript for certificate popup functionality
document.addEventListener('DOMContentLoaded', function() {
    // First, add the popup container to the body
    const popupContainer = document.createElement('div');
    popupContainer.className = 'certificate-popup';
    popupContainer.innerHTML = `
        <div class="popup-content">
            <img src="" alt="Certificate">
            <div class="close-popup">&times;</div>
        </div>
    `;
    document.body.appendChild(popupContainer);
    
    // Get all certificate cards
    const certificateCards = document.querySelectorAll('.certificate-card');
    const popup = document.querySelector('.certificate-popup');
    const popupImg = popup.querySelector('img');
    const closeBtn = popup.querySelector('.close-popup');
    
    // Add click event to each certificate card
    certificateCards.forEach(card => {
        card.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('src');
            const imgAlt = this.querySelector('img').getAttribute('alt');
            
            // Set the image source and alt in the popup
            popupImg.setAttribute('src', imgSrc);
            popupImg.setAttribute('alt', imgAlt || 'Certificate');
            
            // Show the popup
            popup.classList.add('active');
            
            // Prevent scrolling when popup is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close popup when clicking the close button
    closeBtn.addEventListener('click', function(e) {
        popup.classList.remove('active');
        document.body.style.overflow = '';
        e.stopPropagation();
    });
    
    // Close popup when clicking outside the image
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close popup when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// CSS for the popup
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}