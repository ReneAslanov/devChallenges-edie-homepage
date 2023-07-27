const burger = document.getElementById("nav-burger");
const cross = document.getElementById("cross");
const liWrapperBurger = document.getElementById("li-wrapper-burger");

burger.addEventListener("click", handleBurgerClick);
cross.addEventListener("click", handleBurgerClick);

liWrapperBurger.addEventListener("click", handleLiActiveState);

function handleBurgerClick(e) {
    const burgerNav = document.getElementById("burger-opened");
    if (e.target.id === "nav-burger" || e.target.parentElement.id === "nav-burger") {
        burgerNav.style.display = "flex";
    }

    else if (e.target.id === "cross" || e.target.parentElement.id === "cross") {
        burgerNav.style.display = "none";
    }

    else {
        console.log(e.target);
    }
}

function handleLiActiveState(e) {
    const burgerNav = document.getElementById("burger-opened");
    const classes = Array.from(e.target.classList);
    if (classes.includes("nav-link")) {
        burgerNav.style.display = "none";
    }
}
