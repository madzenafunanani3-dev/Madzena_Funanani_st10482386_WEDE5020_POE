const form = document.getElementById("enquiryForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the values entered by the user
    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const services = document.getElementById("services").value;
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check the preferred contact method
    const contactMethod = document.querySelector(
        'input[name="contactMethod"]:checked'
    );

    let errors = [];

    // Validate full name
    if (fullName === "") {
        errors.push("Please enter your full name.");
    }

    // Validate phone number if the user selects phone
    if (contactMethod && contactMethod.value === "phone") {
        if (phone === "") {
            errors.push("Please enter your phone number.");
        } else if (!/^[0-9+\s()-]{7,20}$/.test(phone)) {
            errors.push("Please enter a valid phone number.");
        }
    }

    // Validate service selection
    if (services === "") {
        errors.push("Please select a service.");
    }

    // Validate subject
    if (subject === "") {
        errors.push("Please enter the subject.");
    }

    // Validate enquiry message
    if (message === "") {
        errors.push("Please enter your enquiry message.");
    }

    // Display validation results
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        alert("Your enquiry form has been validated successfully!");
        form.reset();
    }
});



const searchInput = document.getElementById("serviceSearch");
const categoryFilter = document.getElementById("serviceFilter");
const serviceCards = document.querySelectorAll(".service-card");
const noResults = document.getElementById("noResults");
const searchMessage = document.getElementById("searchMessage");

function filterServices() {
    const searchText = searchInput.value.trim().toLowerCase();
    const selectedCategory = categoryFilter.value;

    let visibleCount = 0;

    serviceCards.forEach(function(card) {
        const cardText = card.textContent.toLowerCase();
        const cardCategory = card.dataset.category;

        const matchesSearch = cardText.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            cardCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {
            card.hidden = false;
            visibleCount++;
        } else {
            card.hidden = true;
        }
    });

    noResults.hidden = visibleCount !== 0;

    if (searchText === "" && selectedCategory === "all") {
        searchMessage.textContent =
            "Showing all " + visibleCount + " services.";
    } else {
        searchMessage.textContent =
            "Found " + visibleCount + " matching service(s).";
    }
}

searchInput.addEventListener("input", filterServices);
categoryFilter.addEventListener("change", filterServices);



document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("enquiryForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const services = document.getElementById("services").value;
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const contactMethod = document.querySelector(
            'input[name="contactMethod"]:checked'
        );

        const feedback = document.getElementById("enquiryFeedback");

        let errors = [];

        if (fullName.length < 2) {
            errors.push("Please enter your full name.");
        }

        if (!contactMethod) {
            errors.push("Please select a preferred contact method.");
        }

        if (contactMethod && contactMethod.value === "phone") {
            if (phone === "") {
                errors.push("Please enter your phone number.");
            } else if (!/^[0-9+\s()-]{7,20}$/.test(phone)) {
                errors.push("Please enter a valid phone number.");
            }
        }

        if (services === "") {
            errors.push("Please select a service.");
        }

        if (subject === "") {
            errors.push("Please enter a subject.");
        }

        if (message.length < 10) {
            errors.push("Your enquiry must contain at least 10 characters.");
        }

        if (errors.length > 0) {
            feedback.style.color = "darkred";
            feedback.textContent = errors.join(" ");
            return;
        }

        let response = "";

        if (services === "investment") {
            response = "Thank you for your interest in Investment Education. We will provide further information about the available learning opportunities.";
        } else if (services === "trading") {
            response = "Thank you for your interest in Trading Education. We will provide further information about the available lessons.";
        } else if (services === "financial-markets") {
            response = "Thank you for your interest in Financial Market Lessons. We will provide further information about the learning opportunities.";
        } else if (services === "strategies") {
            response = "Thank you for your interest in Investment and Trading Strategies. We will provide further information about these services.";
        } else {
            response = "Thank you for your enquiry. We will review your request and provide further information.";
        }

        feedback.style.color = "navy";
        feedback.textContent =
            "Thank you, " + fullName + "! " + response;

        form.reset();
    });

});


