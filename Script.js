/* 
   VARUKORG SYSTEM
 */

// Hämta sparad kundvagn
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/*  LÄGG TILL PRODUKT */
function addToCart(name, price) {
    cart.push({ name, price });

    // Spara i localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    updateCartDisplay();

    alert(name + " lades till i kundvagnen!");
}

/*  UPPDATERA ANTAL I NAVBAR  */
function updateCartCount() {
    const count = document.getElementById("cart-count");

    if (count) {
        count.textContent = cart.length;
    }
}

/*VISA VARUKORG  */
function updateCartDisplay() {
    const cartList = document.getElementById("cartList");
    const totalText = document.getElementById("total");

    // Om vi inte är på shop-sidan → gör inget
    if (!cartList || !totalText) return;

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item.name + " - " + item.price + " kr ";

        // Ta bort knapp
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Ta bort";
        removeBtn.onclick = function () {
            removeFromCart(index);
        };

        li.appendChild(removeBtn);
        cartList.appendChild(li);

        total += item.price;
    });

    totalText.textContent = "Totalt: " + total + " kr";
}

/*  TA BORT PRODUKT  */
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    updateCartDisplay();
}

/*  CHECKOUT  */
function checkout() {
    if (cart.length === 0) {
        alert("Din varukorg är tom!");
        return;
    }

    alert("Tack för ditt köp!");

    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    updateCartDisplay();
}

/* 
   BMI RÄKNARE
*/

function calculateBMI() {
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value / 100;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("bmiResult");

    // Kontroll
    if (!age || !height || !weight) {
        result.textContent = "Fyll i alla fält!";
        result.style.color = "red";
        return;
    }

    let bmi = (weight / (height * height)).toFixed(1);

    let text = "";
    let color = "";

    // ===== BMI KATEGORIER =====
    if (bmi < 18.5) {
        text = "Undervikt";
        color = "blue";
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        text = "Normalvikt";
        color = "green";
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        text = "Övervikt";
        color = "orange";
    } 
    else {
        text = "Fetma";
        color = "red";
    }

    // Visa resultat
    result.textContent = "BMI: " + bmi + " (" + text + ")";
    result.style.color = color;
}


   /*KONTAKTFORMULÄR*/


function validateForm(event) {
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    if (!name || !email || !message) return;

    if (name.value === "" || email.value === "" || message.value === "") {
        alert("Fyll i alla fält!");
        return;
    }

    alert("Meddelande skickat!");
}



window.onload = function () {
    updateCartCount();
    updateCartDisplay();

    // Klick på kundvagn → gå till shop
    const cartIcon = document.querySelector(".cart-icon");

    if (cartIcon) {
        cartIcon.onclick = function () {
            window.location.href = "shop.html";
        };
    }
};