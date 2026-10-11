
const cards = document.querySelectorAll(".pricing-card");

cards.forEach((card) => {
    const button = card.querySelector("button");

    button.addEventListener("click", () => {
        cards.forEach((item) => {
            item.classList.remove("selected");

            const itemButton = item.querySelector("button");
            itemButton.textContent = "Choose Plan";
        });

        card.classList.add("selected");
        button.textContent = "Selected ✓";
    });
});