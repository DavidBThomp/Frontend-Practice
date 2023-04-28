// Define a callback function to be called by the Intersection Observer
const callback = (entries, observer) => {
    // Iterate over each entry in the array of IntersectionObserverEntry objects
    entries.forEach(entry => {
        // If the observed element is intersecting the viewport
        if (entry.isIntersecting) {
            // Set the background color of the document body to the value of the observed element's data-color attribute
            document.body.style.backgroundColor = entry.target.dataset.color;
        }
    });
};

// Select all section elements in the document
const changes = document.querySelectorAll('section');

// Create a new Intersection Observer instance with the defined callback function
const observer = new IntersectionObserver(callback, {
    threshold: .5
});

// Observe each section element using the Intersection Observer instance
changes.forEach(change => {
    observer.observe(change);
});