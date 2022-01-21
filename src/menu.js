import nigiriImage from './pexels-cup-of-couple-8472620.jpg';
import sashimiImage from './pexels-奥尼尔-孙-2871756.jpg';
import makiImage from './pexels-cup-of-couple-8472644.jpg';


class Sushi {
    constructor(title, description, price, image) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}


export default function loadMenu() {
    let sushiArray = []
    let content = document.querySelector("#content");
    let bigContainer = document.createElement("div");
    bigContainer.id = "big-container";
    let container = document.createElement("div");
    container.id = "container";
    let nigiri = new Sushi("Nigiri", "A topping, usually fish, served on top of sushi rice", 200, nigiriImage);
    let sashimi = new Sushi("Sashimi", "Fish or shellfish served alone (no rice)", 250, sashimiImage);
    let maki = new Sushi("Maki", "Rice and filling wrapped in seaweed", 300, makiImage);
    sushiArray.push(nigiri);
    sushiArray.push(sashimi);
    sushiArray.push(maki);
    sushiArray.forEach(sushi => {
        Object.setPrototypeOf(sushi, Sushi.prototype);
        let sushiItem = document.createElement("div");
        sushiItem.className = "sushi";
        let left = document.createElement("div");
        left.className = "left";
        let image = document.createElement("img");
        image.src = sushi.image;
        left.appendChild(image);
        let right = document.createElement("div");
        right.className = "right";
        let title = document.createElement("h2");
        title.classList.add("description");
        title.classList.add("sushi-name");
        title.textContent = sushi.title;
        let description = document.createElement("p");
        description.classList.add("description");
        description.classList.add("sushi-description");
        description.textContent = sushi.description;
        let price = document.createElement("h3");
        price.className = "description";
        price.textContent = `Rs.${sushi.price}`;
        right.appendChild(title);
        right.appendChild(description);
        right.appendChild(price);
        sushiItem.appendChild(left);
        sushiItem.appendChild(right);
        container.appendChild(sushiItem);
    });
    bigContainer.appendChild(container);
    content.appendChild(bigContainer);
}