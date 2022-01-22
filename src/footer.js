export default function loadFooter() {
    let content = document.querySelector("#content");
    let footer = document.createElement("div");
    footer.id = "footer";
    let copy = document.createElement("p");
    copy.className = "description";
    copy.textContent = "Copyright \u00A9 ";
    let github = document.createElement("a");
    github.href = "https://github.com/sohamb17";
    github.className = "description";
    github.textContent = "sohamb17";
    copy.appendChild(github);
    footer.appendChild(copy);
    content.appendChild(footer);
}