let content = document.querySelector("#content");

export default function loadHome() {
    let container = document.createElement("div");
    container.id = "container";
    let title = document.createElement("h1");
    title.className = "description";
    title.id = "title";
    title.textContent = "Sushilicious";
    let tagLine = document.createElement("p");
    tagLine.className = "description";
    tagLine.id = "tagline";
    tagLine.textContent = "\"Follow your heart closely and it'll eventually lead you to sushi.\"";
    let secondaryText = document.createElement("p");
    secondaryText.className = "description";
    secondaryText.textContent = "Shrimply the best place to enjoy sushi in the city.";
    let outletContainer = document.createElement("div");
    let outletDescription = document.createElement("p");
    outletDescription.className = "description";
    outletDescription.textContent = "Outlets at:";
    let outlets = document.createElement("ul");
    outlets.className = "description";
    let vile_parle = document.createElement("li");
    vile_parle.textContent = "Vile Parle";
    let dadar = document.createElement("li");
    dadar.textContent = "Dadar";
    let bandra = document.createElement("li");
    bandra.textContent = "Bandra";
    outlets.appendChild(vile_parle);
    outlets.appendChild(dadar);
    outlets.appendChild(bandra);
    outletContainer.appendChild(outletDescription);
    outletContainer.appendChild(outlets);
    container.appendChild(title);
    container.appendChild(tagLine);
    container.appendChild(secondaryText);
    container.appendChild(outletContainer);
    content.appendChild(container);
}