import restaurantImage from "../img/restaurant.jpg";

export const render = (function() {
    const contentBox = document.querySelector("div#content");
    const btnHome = document.querySelector("#btn-home");
    const btnMenu = document.querySelector("#btn-menu");
    const btnAbout = document.querySelector("#btn-about");
    const btnContact = document.querySelector("#btn-contact");

    // bind events
    btnHome.addEventListener("click", renderHome);
    btnMenu.addEventListener("click", renderMenu);
    btnAbout.addEventListener("click", renderAbout);
    btnContact.addEventListener("click", renderContact);

    function renderHome(e) {
        clearContentBox();

        const headerText = document.createElement("h1");
        headerText.textContent = "The Whimsical Table";

        const heroImg = document.createElement("img");
        heroImg.src = restaurantImage;
        heroImg.alt = "Image of the The Whimsical Table";
        heroImg.id = "img-hero";

        const descriptionText = document.createElement("p");
        descriptionText.textContent = "Welcome to The Whimsical Table — a place where flavor meets imagination. Step into a world of playful elegance, where each dish tells a story and every ingredient is chosen with care. From vibrant seasonal creations to reimagined classics, our chefs blend artistry and comfort to craft unforgettable dining experiences. Sit back, savor, and let your senses wander — at The Whimsical Table, every meal is a little bit magical.";

        contentBox.appendChild(headerText);
        contentBox.appendChild(heroImg);
        contentBox.appendChild(descriptionText);

    }

    function renderMenu(e) {
        clearContentBox();
    }

    function renderAbout(e) {
        clearContentBox();
    }

    function renderContact(e) {
        clearContentBox();
    }

    function clearContentBox() {
        Array.from(contentBox.children).forEach(element => {
            contentBox.removeChild(element);
        });
    }

    renderHome();
})();