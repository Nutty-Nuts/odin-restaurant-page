import "./style.css";

export function navbar() {
    let navbar = document.createElement("div");
    navbar.classList.add("navbar");

    let left = document.createElement("div");
    left.classList.add("left");

    let home = document.createElement("div");
    home.innerHTML = "SRAR";

    left.append(home);

    let right = document.createElement("div");
    right.classList.add("right");

    let menu = document.createElement("div");
    menu.innerHTML = "Menu";

    var info = document.createElement("div");
    info.innerHTML = "Info";

    var hours = document.createElement("div");
    hours.innerHTML = "Hours";

    right.append(menu, info, hours);

    navbar.append(left, right);

    return navbar;
}
