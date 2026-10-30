document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        return;
    }

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const type = document.getElementById("messageType").value;
        const message = document.getElementById("contactMessage").value.trim();

        const feedback = document.getElementById("contactFeedback");

        if (!name || !email || !type || !message) {
            feedback.textContent = "Please complete all fields.";
            return;
        }

        if (name.length < 2 || message.length < 10) {
            feedback.textContent =
                "Please enter a valid name and a message of at least 10 characters.";
            return;
        }

        const subject = encodeURIComponent(type + " - " + name);

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage Type: " + type +
            "\n\nMessage:\n" + message
        );

        const emailLink =
            "mailto:info@digitalcashflow.co.za?subject=" +
            subject + "&body=" + body;

        feedback.textContent =
            "Your message is ready. Your email application will open so you can send it.";

        window.location.href = emailLink;
    });

});
