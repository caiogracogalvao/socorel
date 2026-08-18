document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (!menuToggle || !siteNav) {
        return;
    }

    const setMenuState = (isOpen) => {
        siteNav.classList.toggle("is-open", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.contains("is-open");
        setMenuState(!isOpen);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            setMenuState(false);
        });
    });

    document.addEventListener("click", (event) => {
        if (
            !siteNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            setMenuState(false);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 850) {
            setMenuState(false);
        }
    });
});
