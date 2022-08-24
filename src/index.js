// import { navbar } from "./navbar.js";
import { homePage } from "./homepage.js";
import { infoPage } from "./info.js";
import { hoursPage } from "./hours.js";
import "./style.css";

function navbar() {
    let navbar = document.createElement("div");
    navbar.classList.add("navbar");

    let left = document.createElement("div");
    left.classList.add("left");

    let home = document.createElement("div");
    home.innerHTML = "SRAR";

    home.addEventListener("click", goHome);

    left.append(home);

    let right = document.createElement("div");
    right.classList.add("right");

    let menu = document.createElement("div");
    menu.innerHTML = "Menu";

    // menu.addEventListener("click", goMenu);

    let info = document.createElement("div");
    info.innerHTML = "Info";

    info.addEventListener("click", goInfo);

    let hours = document.createElement("div");
    hours.innerHTML = "Hours";

    hours.addEventListener("click", goHours);

    right.append(menu, info, hours);

    navbar.append(left, right);

    return navbar;
}

let container = document.querySelector(".content");

document.querySelector(".nav").append(navbar());

function goHome() {
    console.log("info");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    document.querySelector(".content").append(homePage());
}

function goInfo() {
    console.log("info");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    document.querySelector(".content").append(infoPage());
}

function goHours() {
    console.log("info");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    document.querySelector(".content").append(hoursPage());
}

document.querySelector(".content").append(homePage());
