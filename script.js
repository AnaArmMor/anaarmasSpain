
// To add a click event to the navigation links
const links = document.querySelectorAll("#header ul li a");
links.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        alert(`You clicked on ${link.textContent} link.`);
    });
});

// Form validation for the login form
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Perform basic form validation
    if (emailValue === "") {
        alert("Please enter your email.");
        return;
    }

    if (passwordValue === "") {
        alert("Please enter your password.");
        return;
    }

    // Validation passed, you can proceed with form submission or other actions here
    alert("Form submitted successfully!");
});
// Search bar functionality
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchQuery = searchInput.value.trim();
    if (searchQuery === "") {
        alert("Please enter a search query.");
        return;
    }

    alert(`You searched for: ${searchQuery}`);
    // Add further logic here to process the search query (e.g., perform a search, display search results, etc.).
    // For this example, we're just showing an alert with the search query.
});
