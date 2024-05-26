document.addEventListener('DOMContentLoaded', () => {
console.log("Dom Loaded!")

// HTML button elements
const addFoodButton = document.querySelector('#add-food-button-id');
const homeScreen = document.querySelector("#home-screen-id");
const addFoodScreen = document.querySelector('#add-food-screen-id');
const locationSelect = document.querySelector('#locations');
const cancelButton = document.querySelector('#food-screen-cancel-button');

// Location list
let locationList = ["Fridge", "Freezer", "Pantry"];

// button1 click event listener to apply function
addFoodButton.addEventListener('click', () => {
    console.log("Add Food Button Clicked!");
    homeScreen.style.display = "none";
    addFoodScreen.style.display = "flex";
});

cancelButton.addEventListener

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