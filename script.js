document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded!");

    // Screens
    const homeScreen = document.querySelector("#home-screen-id");
    const addFoodScreen = document.querySelector('#add-food-screen-id');
    const foodConfirmScreen = document.querySelector('#confirm-food-screen-id');

    // Buttons
    const cancelButton = document.querySelector('#food-screen-cancel-button');
    const addFoodButton = document.querySelector('#add-food-button-id');

    // Forms
    const addFoodForm = document.querySelector('#food-form-id');
    const locationSelect = document.querySelector('#locations');


    // Arrays
    let locationList = ["Fridge", "Freezer", "Pantry"];
    let foodList = [];

    addFoodButton.addEventListener('click', () => {
        console.log("Add Food Button Clicked!");
        homeScreen.style.display = "none";
        addFoodScreen.style.display = "flex";
    });

    cancelButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("Cancel Button Clicked!");
        addFoodScreen.style.display = "none";
        homeScreen.style.display = "flex";
    });

    function addLocations() {
        locationList.forEach((location) => {
            const newOption = document.createElement('option');
            newOption.text = location;
            newOption.value = location.toLowerCase().replace(/\s+/g, '-');
            locationSelect.add(newOption);
        });
    };

    addFoodForm.addEventListener('submit', function(event) {
        event.preventDefault();

        let foodName = document.querySelector('#foodName').value;
        let location = document.querySelector('#locations').value;
        let quantity = document.querySelector('#quantity').value;
        let expirationDate = document.querySelector('#expirationDate').value;

        const foodItem = {
            foodname: foodName,
            location: location,
            quantity: quantity,
            expirationDate: expirationDate
        };

        foodList.push(foodItem);
        addFoodForm.reset();

        addFoodScreen.style.display = "none";
        foodConfirmScreen.style.display = 'flex';

    });

    addLocations();
});
