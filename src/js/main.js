import "../css/tailwind.css";

const menu = {
  menuToggle: document.getElementById("menuToggle"),
  iconOpen: document.getElementById("iconOpen"),
  iconClose: document.getElementById("iconClose"),
  mobileMenu: document.getElementById("mobile-menu"),
  overlay: document.getElementById("overlay"),
};

function toggleMenu() {
  const isOpen = menu.menuToggle.getAttribute("aria-expanded") === "true";
  menu.menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menu.mobileMenu.setAttribute("aria-hidden", String(isOpen));
  menu.iconOpen.classList.toggle("hidden");
  menu.iconClose.classList.toggle("hidden");
  menu.overlay.classList.toggle("hidden");
  if (!isOpen) {
    console.log("open");
    menu.mobileMenu.classList.add(
      "opacity-100",
      "transition-all",
      "duration-500"
    );
  } else {
    console.log("close");
    menu.mobileMenu.classList.remove(
      "opacity-100",
      "transition-all",
      "duration-500"
    );
  }
}

function resetMenu() {
  menu.menuToggle.setAttribute("aria-expanded", "false");
  menu.mobileMenu.setAttribute("aria-hidden", "true");
  menu.iconOpen.classList.remove("hidden");
  menu.iconClose.classList.add("hidden");
  menu.overlay.classList.add("hidden");
  menu.mobileMenu.classList.remove(
    "opacity-100",
    "transition-all",
    "duration-500"
  );
}

menu.menuToggle.addEventListener("click", toggleMenu);
menu.overlay.addEventListener("click", resetMenu);
window.addEventListener("resize", resetMenu);
