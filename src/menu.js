export function menuPage() {
    let page = document.createElement("div");
    page.classList.add("menu");

    let header = document.createElement("h1");
    header.innerHTML = "Our Menu";

    let p1 = document.createElement("p");
    p1.innerHTML = "Chicken Stew";

    let p2 = document.createElement("p");
    p2.innerHTML = "Roasted Chicken";

    let p3 = document.createElement("p");
    p3.innerHTML = "Beef Curry";

    let p4 = document.createElement("p");
    p4.innerHTML = "Roast Beef";

    page.append(header, p1, p2, p3, p4);

    return page;
}
