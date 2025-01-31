// Function to display copyright message
function showCopyright() {
    alert("© 2025 Nepali Culture. All rights reserved.");
}

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        alert("Dark mode activated!");
    } else {
        alert("Dark mode deactivated!");
    }
}

// Function to scroll to a specific section smoothly
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Function to display a greeting message based on time
function displayGreeting() {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    alert(greeting);
}

// Function to dynamically change the hero section text
function updateHeroText(title, description) {
    const heroTitle = document.querySelector(".hero-content h1");
    const heroDesc = document.querySelector(".hero-content p");

    if (heroTitle && heroDesc) {
        heroTitle.textContent = title;
        heroDesc.textContent = description;
    }
}

// Function to validate a form
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name) {
        alert("Name is required.");
        return false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Function to create a modal
function createModal(content) {
    const modal = document.createElement("div");
    modal.classList.add("custom-modal");

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <p>${content}</p>
        </div>
    `;

    document.body.appendChild(modal);

    const closeBtn = modal.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => {
        modal.remove();
    });
}

// Function to count the number of words in a string
function countWords(text) {
    if (!text) return 0;
    return text.trim().split(/\s+/).length;
}

// Function to display the word count of user input
function showWordCount() {
    const input = prompt("Enter some text:");
    const wordCount = countWords(input);
    alert(`Word count: ${wordCount}`);
}

// Function to display current date and time
function showDateTime() {
    const now = new Date();
    alert(`Current Date and Time: ${now.toLocaleString()}`);
}

// Function to fetch and display random quotes
async function fetchRandomQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        alert(`"${data.content}" - ${data.author}`);
    } catch (error) {
        alert("Failed to fetch quote. Please try again later.");
    }
}

// Function to highlight all images
function highlightImages() {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.style.border = "5px solid #ff5733";
        img.style.borderRadius = "10px";
    });

    alert("All images highlighted!");
}

// Function to reset image styles
function resetImageStyles() {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.style.border = "none";
        img.style.borderRadius = "0";
    });

    alert("Image styles reset!");
}

// Function to dynamically add a new section to the page
function addSection(title, content) {
    const section = document.createElement("section");
    section.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;

    document.body.appendChild(section);
    alert(`Section "${title}" added successfully!`);
}

// Function to toggle the visibility of the footer
function toggleFooterVisibility() {
    const footer = document.querySelector(".footer");
    if (footer) {
        footer.style.display =
            footer.style.display === "none" ? "block" : "none";
        alert(
            footer.style.display === "none"
                ? "Footer hidden!"
                : "Footer visible!"
        );
    }
}

// Function to calculate the factorial of a number
function calculateFactorial(n) {
    if (n < 0) return "Invalid input. Factorial is not defined for negative numbers.";
    if (n === 0 || n === 1) return 1;
    return n * calculateFactorial(n - 1);
}

// Function to show the factorial of a user-provided number
function showFactorial() {
    const number = parseInt(prompt("Enter a number:"));
    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }

    const factorial = calculateFactorial(number);
    alert(`Factorial of ${number} is ${factorial}`);
}

// Function to update navbar links dynamically
function updateNavbarLinks(links) {
    const navbar = document.querySelector(".navbar-nav");
    navbar.innerHTML = ""; // Clear existing links

    links.forEach((link) => {
        const li = document.createElement("li");
        li.classList.add("nav-item");
        li.innerHTML = `<a class="nav-link" href="${link.href}">${link.text}</a>`;
        navbar.appendChild(li);
    });

    alert("Navbar links updated!");
}
// Function to detect if an image is in view and trigger animation
function animateImagesOnScroll() {
    const images = document.querySelectorAll("img");

    images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            img.classList.add("visible"); // Add the class to trigger the animation
        } else {
            img.classList.remove("visible"); // Remove the class if the image is out of view
        }
    });
}

// Add an event listener to trigger the image animation on scroll
window.addEventListener("scroll", animateImagesOnScroll);

// Call the function once to animate images already in view when the page loads
document.addEventListener("DOMContentLoaded", animateImagesOnScroll);

