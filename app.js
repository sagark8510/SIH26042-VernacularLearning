// ==========================================
// VernacularLearn - SIH26042
// Main Application JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------------------
    // Mobile Menu
    // ------------------------------------------

    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }


    // ------------------------------------------
    // Smooth Scrolling
    // ------------------------------------------

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    // ------------------------------------------
    // Language Selection
    // ------------------------------------------

    const languageButtons =
        document.querySelectorAll("[data-language]");

    languageButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const language =
                this.getAttribute("data-language");

            localStorage.setItem(
                "selectedLanguage",
                language
            );

            console.log(
                "Selected language:",
                language
            );

        });

    });


    // ------------------------------------------
    // Start Learning Button
    // ------------------------------------------

    const startButtons =
        document.querySelectorAll(".start-learning");

    startButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            window.location.href = "language.html";

        });

    });


    // ------------------------------------------
    // AI Assistant Button
    // ------------------------------------------

    const aiButtons =
        document.querySelectorAll(".ai-assistant-button");

    aiButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            window.location.href = "ai-assistant.html";

        });

    });


    // ------------------------------------------
    // Remember Selected Language
    // ------------------------------------------

    const savedLanguage =
        localStorage.getItem("selectedLanguage");

    if (savedLanguage) {

        console.log(
            "Previously selected language:",
            savedLanguage
        );

    }


    // ------------------------------------------
    // Simple Welcome Message
    // ------------------------------------------

    console.log(
        "VernacularLearn SIH26042 initialized successfully."
    );

});
    // ------------------------------------------
    // Simple Welcome Message
    // ------------------------------------------

    console.log(
        "VernacularLearn SIH26042 initialized successfully."
    );

}); // <--- Yahan tumhara purana code khatam ho raha hai


// 👇 ISKE THEEK NEECHE YEH NAYA CODE PASTE KAR DO 👇

// ==========================================
// LOCAL STORAGE: PROGRESS TRACKING
// ==========================================

// 1. Score save karne ka function (Jab student practice complete kare)
function saveStudentScore(lessonName, score) {
    let progressData = JSON.parse(localStorage.getItem("vernacularLearn_Scores")) || {};
    progressData[lessonName] = score;
    localStorage.setItem("vernacularLearn_Scores", JSON.stringify(progressData));
    console.log(lessonName + " ka score save ho gaya: " + score);
}

// 2. Dashboard ke liye Total Score nikalne ka function
function getTotalScore() {
    let progressData = JSON.parse(localStorage.getItem("vernacularLearn_Scores")) || {};
    let total = 0;
    for (let lesson in progressData) {
        total += progressData[lesson];
    }
    return total;
}

