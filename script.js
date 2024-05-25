document.addEventListener('DOMContentLoaded', () => {
console.log("Dom Loaded!")

// HTML button elements
const addFoodButton = document.querySelector('#add-food-button');
const homeScreen = document.querySelector("#home-screen-id");
const addFoodScreen = document.querySelector('#add-food-screen-id');

// button1 click event listener to apply function
addFoodButton.addEventListener('click', () => {
    console.log("Add Food Button Clicked!");
    homeScreen.style.display = "none";
    addFoodScreen.style.display = "flex";
});

});