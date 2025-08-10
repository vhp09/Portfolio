function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Landing page hero fade-out and portfolio fade-in
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero-container");
    const portfolio = document.querySelector(".portfolio-container");
    const typewriterInner = document.querySelector(".typewriter-inner");

    if (hero && portfolio && typewriterInner) {
        // Optional: play hero only once per session
        // if (sessionStorage.getItem("heroPlayed")) {
        //     hero.style.display = "none";
        //     portfolio.style.opacity = "1";
        //     portfolio.style.pointerEvents = "auto";
        //     return;
        // }

        typewriterInner.addEventListener("animationend", () => {
            setTimeout(() => {
                hero.style.opacity = "0";
                portfolio.style.opacity = "1";

                // Wait for fade-in transition before enabling interaction
                setTimeout(() => {
                    portfolio.style.pointerEvents = "auto";
                    sessionStorage.setItem("heroPlayed", "true");
                }, 1000);
            }, 500);
        });
    }
});