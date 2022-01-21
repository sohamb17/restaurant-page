export default function loadNavbar() {
    let content = document.querySelector("#content");
    let navbar = document.createElement("div");
    navbar.id = "navbar";
    let navbarItems = document.createElement("ul");
    navbarItems.id = "navbar-items";
    let home = document.createElement("li");
    home.textContent = "Home";
    home.id = "home";
    home.classList.add("navbar-item");
    home.classList.add("active-tab");
    let menu = document.createElement("li");
    menu.textContent = "Menu";
    menu.id = "menu";
    menu.classList.add("navbar-item");
    let contact = document.createElement("li");
    contact.textContent = "Contact Us";
    contact.id = "contact";
    contact.classList.add("navbar-item");
    navbarItems.appendChild(home);
    navbarItems.appendChild(menu);
    navbarItems.appendChild(contact);
    navbar.appendChild(navbarItems);
    content.appendChild(navbar);
}