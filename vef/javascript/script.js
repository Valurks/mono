// Select the button and body
const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

// Check the current mode on page load
let currentMode = localStorage.getItem('theme') || 'light'; // Default to 'light' if nothing saved

// Apply the saved theme on page load
if (currentMode === 'dark') {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
} else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
}

// Event listener for the toggle button
toggleButton.addEventListener('click', () => {
    if (currentMode === 'dark') {
        // Switch to light mode
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        currentMode = 'light';
        localStorage.setItem('theme', 'light'); // Save preference
    } else {
        // Switch to dark mode
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        currentMode = 'dark';
        localStorage.setItem('theme', 'dark'); // Save preference
    }
});