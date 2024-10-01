var themeLink = document.getElementById('theme-link');
var toggleButton = document.getElementById('toggle-style');
var style1 = 'style.css';
var style2 = 'style2.css';
function toggleStyles() {
    if (themeLink.getAttribute('href') === style1) {
        themeLink.setAttribute('href', style2);
        localStorage.setItem('selectedStyle', style2);
    }
    else {
        themeLink.setAttribute('href', style1);
        localStorage.setItem('selectedStyle', style1);
    }
}
toggleButton.addEventListener('click', toggleStyles);
var savedStyle = localStorage.getItem('selectedStyle');
if (savedStyle) {
    themeLink.setAttribute('href', savedStyle);
}
else {
    themeLink.setAttribute('href', style1);
}
// Refresh page so changes of divs can be reloaded
if (toggleButton) {
    toggleButton.addEventListener('click', function () {
        window.location.reload();
    });
}
// Check if in style2, and then move social media div to landing header and add new div for image
if (themeLink.getAttribute('href') === 'style2.css') {
    var introductionContainer = document.querySelector('.introduction-container');
    // Create new div for Richard's image
    var richardImageDiv = document.createElement('div');
    richardImageDiv.classList.add('richard-image');
    var richardImg = document.createElement('img');
    richardImg.src = 'images/richard1.png';
    richardImageDiv.appendChild(richardImg);
    introductionContainer.appendChild(richardImageDiv);
    // Create new div for text bubble image
    var bubbleImageDiv_1 = document.createElement('div');
    bubbleImageDiv_1.classList.add('text-bubble-image');
    var bubbleImg = document.createElement('img');
    bubbleImg.src = 'images/textbubble.png';
    bubbleImageDiv_1.appendChild(bubbleImg);
    introductionContainer.appendChild(bubbleImageDiv_1);
    // Add hover effect
    richardImageDiv.addEventListener('mouseenter', function () {
        bubbleImageDiv_1.style.opacity = '1';
    });
    richardImageDiv.addEventListener('mouseleave', function () {
        bubbleImageDiv_1.style.opacity = '0';
    });
}
