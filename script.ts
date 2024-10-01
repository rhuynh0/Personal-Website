const themeLink = document.getElementById('theme-link') as HTMLLinkElement;
const toggleButton = document.getElementById('toggle-style') as HTMLButtonElement;

const style1 = 'style.css';
const style2 = 'style2.css';

function toggleStyles(): void {
    if (themeLink.getAttribute('href') === style1) {
        themeLink.setAttribute('href', style2);  
        localStorage.setItem('selectedStyle', style2);  
    } else {
        themeLink.setAttribute('href', style1); 
        localStorage.setItem('selectedStyle', style1);  
    }
}

toggleButton.addEventListener('click', toggleStyles);

const savedStyle = localStorage.getItem('selectedStyle');
if (savedStyle) {
    themeLink.setAttribute('href', savedStyle);
} else {
    themeLink.setAttribute('href', style1);
}

// Refresh page so changes of divs can be reloaded
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        window.location.reload();
    });
}


// Check if in style2, and then move social media div to landing header and add new div for image
    if (themeLink.getAttribute('href') === 'style2.css') {
        const introductionContainer = document.querySelector('.introduction-container') as HTMLDivElement;

        // Create new div for Richard's image
        const richardImageDiv = document.createElement('div');
        richardImageDiv.classList.add('richard-image');
        
        const richardImg = document.createElement('img');
        richardImg.src = 'images/richard1.png';

        richardImageDiv.appendChild(richardImg);
        introductionContainer.appendChild(richardImageDiv);

        // Create new div for text bubble image
        const bubbleImageDiv = document.createElement('div');
        bubbleImageDiv.classList.add('text-bubble-image');
        
        const bubbleImg = document.createElement('img');
        bubbleImg.src = 'images/textbubble.png';

        bubbleImageDiv.appendChild(bubbleImg);
        introductionContainer.appendChild(bubbleImageDiv);

        // Add hover effect
        richardImageDiv.addEventListener('mouseenter', () => {
            bubbleImageDiv.style.opacity = '1';
        });

        richardImageDiv.addEventListener('mouseleave', () => {
            bubbleImageDiv.style.opacity = '0';
        });
    }