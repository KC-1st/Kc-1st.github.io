const button = document.querySelector("#whatFood");

// 1. Set up your lists (Arrays in JS)
const foods = ["lentejas", "garbanzos", "calamares", "pulpo", "huevo", "pizza", "cheese toasty", "pasta con verduras"];
const meats = ["salsa de abuela", "filete", "hamburgesa"];

button.addEventListener("click", function() {
    // 2. Ask the first question
    let advice = prompt("¿Quieres que te ayude a escoger una comida?");
    
    // Check if they typed something and if it's "si"
    if (advice && advice.toLowerCase() === "si") {
        
        let meatEaten = prompt("¿Los niños han comido carne ayer?");
        let currentList = [];

        // 3. Decide which list to use and copy it
        if (meatEaten && meatEaten.toLowerCase() === "si") {
            currentList = [...foods]; // The ... copies the list
        } else {
            currentList = [...meats];
        }

        // 4. Pick a random food and remove it from the list so it isn't picked again
        let randomIndex = Math.floor(Math.random() * currentList.length);
        let firstChoice = currentList.splice(randomIndex, 1)[0]; 
        
        alert("Opción: " + firstChoice);

        // 5. Ask for more options
        let option = prompt("¿Quieres otra opción? (si/no)");
        if (option && option.toLowerCase() === "si") {
            let numOptions = prompt("¿Cuantas opciónes quieres?");
            numOptions = parseInt(numOptions); // Convert text to a number

            // Loop to get the extra options
            let extraFoods = "";
            for (let i = 0; i < numOptions; i++) {
                if (currentList.length > 0) {
                    let nextIndex = Math.floor(Math.random() * currentList.length);
                    let nextChoice = currentList.splice(nextIndex, 1)[0];
                    extraFoods += nextChoice + "\n"; 
                }
            }
            
            if (extraFoods !== "") {
                alert("Más opciones:\n" + extraFoods);
            } else {
                alert("¡No hay más opciones en la lista!");
            }

        } else {
            alert("¡Qué aproveche!");
        }

    } else {
        alert("ESCOGE INGLÉS O ESPAÑOL");
    }
});