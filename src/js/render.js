import restaurantImage from "../img/restaurant.jpg";
import dish1Image from "../img/dish1.avif";
import dish2Image from "../img/dish2.avif";
import dish3Image from "../img/dish3.avif";
import dish4Image from "../img/dish4.avif";
import cook1Image from "../img/cook1.jpg";
import cook2Image from "../img/cook2.jpg";

export const render = (function() {
    const contentBox = document.querySelector("div#content");
    const btnHome = document.querySelector("#btn-home");
    const btnMenu = document.querySelector("#btn-menu");
    const btnAbout = document.querySelector("#btn-about");

    // bind events
    btnHome.addEventListener("click", renderHome);
    btnMenu.addEventListener("click", renderMenu);
    btnAbout.addEventListener("click", renderAbout);

    function renderHome(e) {
        clearContentBox();

        const headerText = document.createElement("h1");
        headerText.textContent = "The Whimsical Table";

        const heroImg = document.createElement("img");
        heroImg.src = restaurantImage;
        heroImg.alt = "Image of the The Whimsical Table";
        heroImg.classList.add("img-hero");

        const descriptionText = document.createElement("p");
        descriptionText.textContent = "Welcome to The Whimsical Table — a place where flavor meets imagination. Step into a world of playful elegance, where each dish tells a story and every ingredient is chosen with care. From vibrant seasonal creations to reimagined classics, our chefs blend artistry and comfort to craft unforgettable dining experiences. Sit back, savor, and let your senses wander — at The Whimsical Table, every meal is a little bit magical.";

        contentBox.appendChild(headerText);
        contentBox.appendChild(heroImg);
        contentBox.appendChild(descriptionText);

    }

    function renderMenu(e) {
        clearContentBox();

        const headerText = document.createElement("h1");
        headerText.textContent = "Menu";

        const menuBox = document.createElement("div");
        menuBox.classList.add("menuBox");

        // dish1
        const dish1 = createDish("Mini Potato Pies with Creamy Garlic Dip & Roasted Beetroot-Bacon", 15.90, 
            "Delicate baked pastry parcels filled with softly mashed potatoes, served alongside a velvety garlic cream dip and a vibrant medley of oven-roasted beetroot and crisp maple-smoked bacon bits. Finished with a drizzle of fresh dill for an aromatic, contrasting flourish—comforting, yet refined.",
            dish1Image, "Mini Potato Pies with Creamy Garlic Dip & Roasted Beetroot-Bacon"
        );
        menuBox.appendChild(dish1);

        //dish2
        const dish2 = createDish("Savoury Black Bowl of Roasted Chicken & Seasonal Vegetables", 17.50,
            "Tender roasted chicken pieces served over steamed fragrant rice, nestled in a sleek black ceramic bowl alongside a colourful medley of seasonal vegetables, finished with fresh herbs and a light citrus-soy glaze—bold in flavour, elegant in presentation.",
            dish2Image, "Savoury Black Bowl of Roasted Chicken & Seasonal Vegetables"
        );
        menuBox.appendChild(dish2);

        //dish3
        const dish3 = createDish("Summer Fruit & Greens Salad", 12.50,
            "A vibrant mix of crisp baby greens and juicy seasonal fruits — think fresh berries, soft stone-fruits and tangy citrus segments — drizzled with a light honey-lemon vinaigrette and finished with toasted almonds and micro-herbs. A refreshing, elegant dish that balances sweetness, freshness and subtle crunch.",
            dish3Image, "Summer Fruit & Greens Salad"
        );
        menuBox.appendChild(dish3);

        //dish4
        const dish4 = createDish("Garden Veggie Open-Face Toast", 13.90,
            "A hearty slice of rustic artisan bread topped with crisp seasonal vegetables — zucchini ribbons, tender baby greens and a hint of basil-pesto drizzle — plated simply on white ceramic to let the freshness shine. A light yet satisfying opening to your meal, with vibrant colour and clean flavours.",
            dish4Image, "Garden Veggie Open-Face Toast"
        );
        menuBox.appendChild(dish4);

        contentBox.appendChild(headerText);
        contentBox.appendChild(menuBox);

    }

    function renderAbout(e) {
        clearContentBox();

        const headerText = document.createElement("h1");
        headerText.textContent = "About Us";

        const aboutContent = document.createElement("div");
        aboutContent.id = "about-content";

        const heroImage = document.createElement("img");
        heroImage.src = cook2Image;
        heroImage.alt = "Image of a cook";
        heroImage.classList.add("img-hero");

        const textBox = document.createElement("div");
        textBox.id = "about-textBox";

        const aboutUsDescription1 = document.createElement("p");
        aboutUsDescription1.textContent = "At The Whimsical Table, food is more than a meal — it’s a little story served on a plate. Born from a love of playful creativity and honest ingredients, we bring together seasonal produce, handcrafted sauces, and a dash of imagination to create dishes that surprise as much as they comfort.";

        const aboutUsDescription2 = document.createElement("p");
        aboutUsDescription2.textContent = "Our kitchen celebrates contrasts: rustic and refined, simple and inventive, familiar yet full of wonder. Every plate is designed to spark curiosity — whether it’s a buttery potato pie paired with roasted beetroot or a bright salad scattered with summer fruit.";

        const aboutUsDescription3 = document.createElement("p");
        aboutUsDescription3.textContent = "We believe dining should be joyful, unhurried, and shared. So pull up a chair, pour a glass, and join us at The Whimsical Table — where flavour meets fantasy.";

        textBox.appendChild(aboutUsDescription1);
        textBox.appendChild(aboutUsDescription2);
        textBox.appendChild(aboutUsDescription3);

        aboutContent.appendChild(heroImage);
        aboutContent.appendChild(textBox);

        contentBox.appendChild(headerText);
        contentBox.appendChild(aboutContent);

    }

    function createDish(name, price, description, image, imageAlt) {
        const dishBox = document.createElement("div");
        dishBox.classList.add("dishBox");

        const dishImage = document.createElement("img");
        dishImage.src = image;
        dishImage.alt = imageAlt;

        const infoBox = document.createElement("div");
        infoBox.classList.add("dishInfoBox");
        const dishName = document.createElement("h2");
        dishName.textContent = name;
        const dishPrice = document.createElement("p");
        dishPrice.textContent = price + " €";
        dishPrice.classList.add("priceTag");
        const dishDescription = document.createElement("p");
        dishDescription.textContent = description;

        infoBox.appendChild(dishName);
        infoBox.appendChild(dishDescription);
        infoBox.appendChild(dishPrice);

        dishBox.appendChild(dishImage);
        dishBox.appendChild(infoBox);

        return dishBox;
    }

    function clearContentBox() {
        Array.from(contentBox.children).forEach(element => {
            contentBox.removeChild(element);
        });
    }

    renderHome();
})();