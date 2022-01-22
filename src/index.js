import loadNavbar from "./navbar";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./style.css";


loadNavbar();
loadHome();

let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let contact = document.querySelector("#contact");

let activeTab = home;

function deleteTab() {
    activeTab.classList.toggle("active-tab");
    let content = document.querySelector("#content");
    let bigContainer = document.querySelector("#big-container");
    content.removeChild(bigContainer);
}

home.addEventListener("click", () => {
    if (home !== activeTab) {
        deleteTab();
        loadHome();
        activeTab = home;
        activeTab.classList.toggle("active-tab");
    }
});

menu.addEventListener("click", () => {
    if (menu !== activeTab) {
        deleteTab();
        loadMenu();
        activeTab = menu;
        activeTab.classList.toggle("active-tab");
    }
});

contact.addEventListener("click", () => {
    if (contact !== activeTab) {
        deleteTab();
        loadContact();
        activeTab = contact;
        activeTab.classList.toggle("active-tab");
    }
});