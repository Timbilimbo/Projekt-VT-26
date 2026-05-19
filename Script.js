// ===== KUNDVAGN =====

let cart = 0;

function addToCart() {
    cart++;
    document.getElementById("cart-count").textContent = cart;

    alert("Produkt tillagd i kundvagnen");
}

// ===== BMI =====

function calculateBMI() {

    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;

    let bmi = (weight / (height * height)).toFixed(1);

    let result = document.getElementById("bmiResult");

    // BMI kategorier
    if (bmi < 18.5) {
        result.innerHTML = "BMI: " + bmi + " - Undervikt";
        result.style.color = "blue";
    }

    else if (bmi <= 24.9) {
        result.innerHTML = "BMI: " + bmi + " - Normalvikt";
        result.style.color = "green";
    }

    else if (bmi <= 29.9) {
        result.innerHTML = "BMI: " + bmi + " - Övervikt";
        result.style.color = "orange";
    }

    else {
        result.innerHTML = "BMI: " + bmi + " - Fetma";
        result.style.color = "red";
    }
}

// ===== KONTAKTFORMULÄR =====

function validateForm(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        alert("Fyll i alla fält");

    } 
    
    else {

        alert("Meddelande skickat");

    }
}