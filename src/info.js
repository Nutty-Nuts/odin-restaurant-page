export function infoPage() {
    let page = document.createElement("div");
    page.classList.add("info");

    let header = document.createElement("h1");
    header.innerHTML = "About Us";

    let p1 = document.createElement("p");
    p1.innerHTML = "123 Some Street";

    let p2 = document.createElement("p");
    p2.innerHTML = "555-555-5555";

    let p3 = document.createElement("p");
    p3.innerHTML = "somerandommail@mail.com";

    page.append(header, p1, p2, p3);

    return page;
}
