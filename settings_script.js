const toggle = document.getElementById('odd-toggle');
const element = document.documentElement;

// Check localStorage for previous theme preference
let savedTheme = localStorage.getItem('theme');

// If a saved theme is found, apply it
if (savedTheme) {
    element.setAttribute('data-theme', savedTheme);
    toggle.checked = (savedTheme === 'dark');
} else {
    // Default to dark theme if no saved preference
    savedTheme = 'dark';
    element.setAttribute('data-theme', savedTheme);
    toggle.checked = true;
}

toggle.addEventListener('change', function() {
    const newTheme = this.checked ? 'dark' : 'light';
    element.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});