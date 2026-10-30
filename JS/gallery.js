const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeButton = document.getElementById("closeLightbox");

galleryImages.forEach(function(image) {
    image.addEventListener("click", function() {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightboxCaption.textContent = image.alt;

        lightbox.hidden = false;
        closeButton.focus();
    });
});

function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.src = "";
}

closeButton.addEventListener("click", closeLightbox);

// Close when clicking the dark background
lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Close using the Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && !lightbox.hidden) {
        closeLightbox();
    }
});
