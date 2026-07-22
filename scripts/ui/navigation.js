export function enableNavigation() {

    const menuButton = document.querySelector("#mobile-drawer-toggle");

    menuButton.addEventListener("click", () => {

        const drawer = document.querySelector("#mobile-drawer");

        drawer.classList.toggle("show");

        menuButton.classList.toggle("open");

        if (drawer.classList.contains("show")) {
            menuButton.setAttribute("aria-expanded", "true");

        }
        else {
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
}