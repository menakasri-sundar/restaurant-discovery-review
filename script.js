// SEARCH

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const restaurantCards =
    document.querySelectorAll(".restaurant-card");


function searchRestaurants() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    restaurantCards.forEach(function(card) {

        const name =
            card.dataset.name.toLowerCase();

        const category =
            card.dataset.category.toLowerCase();

        if (
            name.includes(searchText) ||
            category.includes(searchText)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


if (searchButton) {

    searchButton.addEventListener(
        "click",
        searchRestaurants
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "keyup",
        function(event) {

            if (event.key === "Enter") {
                searchRestaurants();
            }

        }
    );

}


// CATEGORY FILTER

const categoryCards =
    document.querySelectorAll(".category-card");


categoryCards.forEach(function(category) {

    category.addEventListener("click", function() {

        const selectedCategory =
            category.dataset.category.toLowerCase();

        restaurantCards.forEach(function(card) {

            const restaurantCategory =
                card.dataset.category.toLowerCase();

            if (
                selectedCategory === "all" ||
                restaurantCategory.includes(selectedCategory)
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// REVIEW FORM

const showReviewForm =
    document.getElementById("showReviewForm");

const reviewFormSection =
    document.getElementById("reviewFormSection");

const reviewForm =
    document.getElementById("reviewForm");

const newReviews =
    document.getElementById("newReviews");


if (showReviewForm) {

    showReviewForm.addEventListener("click", function() {

        reviewFormSection.scrollIntoView({
            behavior: "smooth"
        });

    });

}


if (reviewForm && newReviews) {

    reviewForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("reviewName").value.trim();

        const rating =
            document.getElementById("reviewRating").value;

        const review =
            document.getElementById("reviewText").value.trim();


        const reviewCard =
            document.createElement("div");

        reviewCard.className = "review-card";


        reviewCard.innerHTML = `
            <div class="review-rating">
                ${"⭐".repeat(Number(rating))}
            </div>

            <h3>${name}</h3>

            <p>${review}</p>
        `;


        newReviews.appendChild(reviewCard);


        reviewForm.reset();


        alert("Your review has been submitted successfully!");

    });

}


// SIGNUP FORM

const signupForm =
    document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("signupName").value.trim();

        const email =
            document.getElementById("signupEmail").value.trim();

        const password =
            document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;

        }


        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);

        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}





// LOGIN FORM

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;


        const savedEmail =
            localStorage.getItem("userEmail");

        const savedName =
            localStorage.getItem("userName");


        if (!savedEmail) {

            alert("Account not found. Please create an account first.");

            return;

        }


        if (email !== savedEmail) {

            alert("Email does not match the registered account.");

            return;

        }


        if (password.length < 6) {

            alert("Password must contain at least 6 characters.");

            return;

        }


        localStorage.setItem("isLoggedIn", "true");

        alert("Welcome back, " + savedName + "!");

        window.location.href = "index.html";

    });

}