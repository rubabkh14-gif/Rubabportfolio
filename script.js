// Smooth scroll reveal animations

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".section-heading, .service-card, .cta-section")
.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});
// Contact form demo interaction

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const feedback = document.getElementById("formFeedback");

        feedback.textContent =
            "Thank you! Your form is filled successfully. Connect a backend to receive messages.";

        contactForm.reset();

    });

}