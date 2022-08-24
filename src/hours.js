export function hoursPage() {
    let page = document.createElement("div");
    page.classList.add("hours");

    let header = document.createElement("h1");
    header.innerHTML = "Opening and Closing Hours";

    let p1 = document.createElement("p");
    p1.innerHTML = "Weekdays - 9AM to 8PM";

    let p2 = document.createElement("p");
    p2.innerHTML = "Weekends - 11AM to 6PM";

    page.append(header, p1, p2);

    return page;
}
