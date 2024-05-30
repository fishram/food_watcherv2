document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded!");

    // Screens
    const homeScreen = document.querySelector("#home-screen-id");
    const addFoodScreen = document.querySelector('#add-food-screen-id');
    const foodConfirmScreen = document.querySelector('#food-confirm-screen-id');

    // Buttons
    const cancelButton = document.querySelector('#food-screen-cancel-button');
    const addFoodButton = document.querySelector('#add-food-button-id');
    const confirmBackButton = document.querySelector('#confirm-back-button-id');
    const confirmConfirmButton = document.querySelector('#confirm-confirm-button-id');

    // Forms
    const addFoodForm = document.querySelector('#food-form-id');
    const locationSelect = document.querySelector('#locations');

    // Cards
    const foodCardContainer = document.querySelector('#food-card-container-id')
    const tempFoodCard = document.querySelector('#temp-food-card-id');
    let tempFoodItem = null;

    // Arrays
    let locationList = ["Fridge", "Freezer", "Pantry"];
    let foodList = [];

    // Add food screen
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
            foodName: foodName,
            location: location,
            quantity: quantity,
            expirationDate: expirationDate
        };

        addFoodForm.reset();

        addFoodScreen.style.display = "none";
        foodConfirmScreen.style.display = 'flex';


        tempFoodCard.innerHTML = `
        <div class="food-card-left">
            <h2 class="food-name">${foodItem.foodName}</h2>
            <p class="food-detail"><strong>Expires:</strong><br> ${foodItem.expirationDate}</p>
            <p class="food-detail"><strong>Quantity:</strong> ${foodItem.quantity}</p>
        </div>
        <div class="food-card-right">
            <img src="icons/fish.svg" class="food-icon" alt="${foodItem.name}">
            <p class="food-detail"><strong>Location:</strong> ${foodItem.location}</p>
        </div>
    </div>
        `;   
        
        tempFoodItem = foodItem;
    });

    // Confirm Food Screen
    confirmBackButton.addEventListener('click', () => {
        foodConfirmScreen.style.display = "none";
        addFoodScreen.style.display = "flex";
        tempFoodItem = null;
    });

    confirmConfirmButton.addEventListener('click', () => {
        foodList.push(tempFoodItem);
        tempFoodItem = null;
        foodCardContainer.append(tempFoodCard);
        foodConfirmScreen.style.display = 'none';
        homeScreen.style.display = 'flex';

    });

    addLocations();
});