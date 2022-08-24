export function homePage() {
    const page = document.createElement("div");

    let header = document.createElement("h1");
    header.innerHTML = "Somebody's Random Ass Restaurant";

    let image = document.createElement("div");
    image.innerHTML = "Image Here";

    let review = document.createElement("p");
    review.innerHTML =
        "I found this restaurant at some random ass place in the middle of no where. To my surprise, the food here was really f***ing good. Would come back here if it weren't in the middle of f***ing nowhere. ";

    let source = document.createElement("b");
    source.innerHTML = "-Some Random Ass Dude";

    page.append(header, image, review, source);

    return page;
}
