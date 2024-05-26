document.addEventListener('DOMContentLoaded', () => {
console.log("Dom Loaded!")

// HTML button elements
const addFoodButton = document.querySelector('#add-food-button-id');
const homeScreen = document.querySelector("#home-screen-id");
const addFoodScreen = document.querySelector('#add-food-screen-id');
const locationSelect = document.querySelector('#locations');

// Location list
let locationList = ["Fridge", "Freezer", "Pantry"];

// button1 click event listener to apply function
addFoodButton.addEventListener('click', () => {
    console.log("Add Food Button Clicked!");
    homeScreen.style.display = "none";
    addFoodScreen.style.display = "flex";
});

function addLocations(){
    locationList.forEach((location) => {
        const newOption = document.createElement('option');
        newOption.text = location;
        newOption.value = location.toLowerCase().replace(/\s+/g, '-');
        locationSelect.add(newOption);
    });
}

addLocations();

});