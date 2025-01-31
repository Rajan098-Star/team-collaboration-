document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Nepal! Explore the beautiful landscapes.");

    // Welcome alert after 2 seconds
    setTimeout(function () {
        alert("Welcome to Nepal! Enjoy the breathtaking beauty.");
    }, 2000);

    // Lightbox feature
    const images = document.querySelectorAll(".image-box img");
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    images.forEach(img => {
        img.addEventListener("click", (e) => {
            lightbox.classList.add("active");
            const imgTag = document.createElement("img");
            imgTag.src = e.target.src;
            lightbox.innerHTML = "";
            lightbox.appendChild(imgTag);
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    // Auto Image Slider
    let currentImageIndex = 0;
    function slideImages() {
        images.forEach(img => img.style.opacity = "0.5");
        images[currentImageIndex].style.opacity = "1";

        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    setInterval(slideImages, 3000); // Change image every 3 seconds

    // Scroll to Top Button
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.innerText = "↑";
    scrollToTopBtn.id = "scrollToTop";
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Image Hover Effects
    images.forEach(img => {
        img.addEventListener("mouseenter", function () {
            img.style.transform = "scale(1.1)";
            img.style.transition = "0.3s";
        });

        img.addEventListener("mouseleave", function () {
            img.style.transform = "scale(1)";
        });
    });

    // Background Animation
    let colors = ["#ff5733", "#ff914d", "#ffc107"];
    let index = 0;

    function changeHeaderColor() {
        document.querySelector("header").style.background = colors[index];
        index = (index + 1) % colors.length;
    }
    setInterval(changeHeaderColor, 5000); // Change header color every 5 seconds
});
