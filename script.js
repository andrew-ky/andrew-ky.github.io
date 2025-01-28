const homeSection = document.querySelector('.home');
const aboutSection = document.querySelector('.about');
const resumeSection = document.querySelector('.resume');
const projectsSection = document.querySelector('.projects');
const contactSection = document.querySelector('.contact');
const linkedinIcon = document.querySelector('.socials a i');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.header a'); // Select all menu links in the header
const buttons = document.querySelectorAll('.btn'); // Select buttons for other styling changes
let lastScrollPosition = 0;
let headerTriggered = false;

function openTab(tabId) {
    // Remove 'active-tab' class from all tab-info elements
    const tabs = document.querySelectorAll('.tab-info');
    tabs.forEach(tab => tab.classList.remove('active-tab'));

    // Remove 'active-link' class from all buttons
    const buttons = document.querySelectorAll('.btn-box button');
    buttons.forEach(button => button.classList.remove('active-link'));

    // Add 'active-tab' to the selected tab-info element
    document.getElementById(tabId).classList.add('active-tab');

    // Add 'active-link' to the clicked button
    document.querySelector(`#${tabId}-btn`).classList.add('active-link');
}

// Function to check if the center of a section is in the viewport
const isCenterInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2
    );
};

// Handle scroll for background, text color, and header visibility changes
const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Change background color, button colors, and header menu text based on the section in view
    if (isCenterInViewport(homeSection)) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        buttons.forEach(btn => {
            btn.style.color = 'black';
            btn.style.borderColor = 'black';
            const btnText = btn.querySelector('a');
            if (btnText) {
                btnText.style.color = 'black';
            }
        });
        navLinks.forEach(link => link.style.color = 'black'); // Menu text to black

        // Hide header when in the home section
        header.classList.remove('visible');
        headerTriggered = false;
        linkedinIcon.style.color = 'black';
        
        // Transition home section to white
        homeSection.style.backgroundColor = 'white';
        homeSection.style.color = 'black';

    } else if (isCenterInViewport(aboutSection)) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        buttons.forEach(btn => {
            btn.style.color = 'white';
            btn.style.borderColor = 'white';
            const btnText = btn.querySelector('a');
            if (btnText) {
                btnText.style.color = 'white';
            }

        });
        navLinks.forEach(link => link.style.color = 'white'); // Menu text to white
        linkedinIcon.style.color = 'white';

        // Show header in all other sections
        if (!headerTriggered) {
            header.classList.add('visible');
            headerTriggered = true;
        }

        // Transition home section to black
        homeSection.style.backgroundColor = 'black';
        homeSection.style.color = 'white';
    } else if (isCenterInViewport(resumeSection)) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        buttons.forEach(btn => {
            btn.style.color = 'black';
            btn.style.borderColor = 'black';
        });
        navLinks.forEach(link => link.style.color = 'black'); // Menu text to black

        // Transition back to white
        homeSection.style.backgroundColor = 'white';
        homeSection.style.color = 'black';
    } else if (isCenterInViewport(projectsSection)) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        buttons.forEach(btn => {
            btn.style.color = 'white';
            btn.style.borderColor = 'white';
        });
        navLinks.forEach(link => link.style.color = 'white'); // Menu text to white

        // Transition home section to black
        homeSection.style.backgroundColor = 'black';
        homeSection.style.color = 'white';
    } else if (isCenterInViewport(contactSection)) {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        buttons.forEach(btn => {
            btn.style.color = 'black';
            btn.style.borderColor = 'black';
        });
        navLinks.forEach(link => link.style.color = 'black'); // Menu text to black

        // Transition home section to white
        homeSection.style.backgroundColor = 'white';
        homeSection.style.color = 'black';
    }
};

// Initialize state on page load and ensure the header is triggered if the user has already scrolled past the home section
const initializePageState = () => {
    handleScroll(); // Ensure color transition happens on load
    const scrollPosition = window.scrollY;

    // If the user is already past the home section, show the header
    if (scrollPosition > homeSection.offsetHeight) {
        header.classList.add('visible');
        headerTriggered = true;
    }
};

// Initialize the page state on load
initializePageState();

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
