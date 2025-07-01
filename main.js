const roles = ["A COMPUTER SCIENTIST", "A WEB DEVELOPER", "A PYTHON CODER", "A PROBLEM SOLVER", "AN ARTIST"];
let currentRoleIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const roleElement = document.getElementById("role");

function typeRole() {
    let currentRole = roles[currentRoleIndex];

    // Construct the part of the string based on whether we're typing or deleting
    const displayedText = isDeleting
        ? currentRole.substring(0, currentCharIndex - 1)
        : currentRole.substring(0, currentCharIndex + 1);

    // Apply it along with the cursor
    roleElement.innerHTML = displayedText + '<span class="cursor">|</span>';

    if (isDeleting) {
        currentCharIndex--;

        if (currentCharIndex === 0) {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
            return;
        }

        setTimeout(typeRole, 100);
    } else {
        currentCharIndex++;

        if (currentCharIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeRole, 2000); // Delay before starting to delete
            return;
        }

        setTimeout(typeRole, 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeRole, 1000); // Initial delay before starting

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function activateNavLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    activateNavLink(); // Initial activation
    window.addEventListener("scroll", activateNavLink);

    // Cursor circle setup
    const cursorCircle = document.createElement('div');
    cursorCircle.classList.add('cursor-circle');
    document.body.appendChild(cursorCircle);

    const aboutSection = document.getElementById('About');
    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;

    aboutSection.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorCircle.style.display = 'block'; // Show the custom cursor
    });

    aboutSection.addEventListener('mouseleave', () => {
        cursorCircle.style.display = 'none'; // Hide when exiting section
    });

    function animateCircle() {
        // Use easing to create a smooth follow effect
        circleX += (mouseX - circleX) * 0.1;
        circleY += (mouseY - circleY) * 0.1;

        cursorCircle.style.transform = `translate3d(${circleX - 10}px, ${circleY - 10}px, 0)`;

        requestAnimationFrame(animateCircle);
    }

    animateCircle();
});
document.addEventListener("DOMContentLoaded", function() {
    // Select the About section
    const aboutSection = document.querySelector('#About');

    // Function to wrap each letter in a span
    function wrapEachLetter(element) {
        element.innerHTML = element.textContent.replace(/\S/g, "<span>$&</span>");
    }

    // Apply the function to the content within the About section
    aboutSection.querySelectorAll('h1, p, h2').forEach(wrapEachLetter);
});
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');
    const description = document.querySelector('.description');
    const portfolioTexts = [
        "This project was started on the 20th May 2025, I gained inspiration from pinterest and used spline for the background to make it interactive",
        "This project was started on the 5th of June 2025, I experimented with typewriting effect with JavaScript and a minimalist design",
        "This project was started on the 16th of June 2025, I experimented with GIFs on my websites to create an interactive experience",
        "Blah blah blah"
    ];

    items.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Remove 'expanded' from all items first
            items.forEach(el => el.classList.remove('expanded'));

            // Add 'expanded' class to the clicked item
            item.classList.add('expanded');

            // Update the description
            description.textContent = portfolioTexts[index];
            description.style.opacity = "1"; // ensure visibility
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const savedTheme = localStorage.getItem('theme') || 'dark';

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    // Optionally set the attribute for consistency
    document.documentElement.setAttribute('data-theme', savedTheme);
});