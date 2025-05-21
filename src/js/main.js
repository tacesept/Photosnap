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
  menu.mobileMenu.hidden = isOpen;
  menu.iconOpen.classList.toggle("hidden");
  menu.iconClose.classList.toggle("hidden");
  menu.overlay.classList.toggle("hidden");
  if (!isOpen) { 
    document.documentElement.classList.add("overflow-hidden");
    menu.iconOpen.focus();
  } else { 
    document.documentElement.classList.remove("overflow-hidden");
    menu.mobileMenu.focus();
  }
}

function resetMenu() {
  menu.menuToggle.setAttribute("aria-expanded", "false"); 
  menu.iconOpen.classList.remove("hidden");
  menu.iconClose.classList.add("hidden");
  menu.overlay.classList.add("hidden"); 
  menu.mobileMenu.hidden = true;
  document.documentElement.classList.remove("overflow-hidden");
}

menu.menuToggle.addEventListener("click", toggleMenu);
menu.overlay.addEventListener("click", resetMenu); 
window.addEventListener("resize", resetMenu);
