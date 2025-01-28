window.onload = function() {
    const ticker = document.getElementById('ticker');
    const tickerWidth = ticker.scrollWidth;
    const viewportWidth = window.innerWidth;

    // Set the duration based on the width of the ticker content
    const duration = tickerWidth / 100; // Adjust this value to control speed

    ticker.style.animation = `ticker ${duration}s linear infinite`;

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes ticker {
            0% { transform: translateX(${viewportWidth}px); }
            100% { transform: translateX(-${tickerWidth}px); }
        }
    `;
    document.head.appendChild(style);
};
