// Define a callback function to be called by the Intersection Observer
const callback = (entries, observer) => {
    // Iterate over each entry in the array of IntersectionObserverEntry objects
    entries.forEach(entry => {
        // If the observed element is intersecting the viewport
        if (entry.isIntersecting) {
            // Set the background color of the document body to the value of the observed element's data-color attribute
            document.body.style.backgroundColor = entry.target.dataset.color;

            // The current data Anchor in view
            // console.log(entry.target.dataset.anchor);
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


// 
//  Scroll Direction
// 


// Initial state
let scrollPos = 0;
let blockScrollEvent = false;
let timeout;

function detectDirection() {
    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top > scrollPos) {
        console.log('up');
    } else {
        console.log('down');
    }
    // saves the new position for iteration.
    setTimeout(() => {
        scrollPos = (document.body.getBoundingClientRect()).top;
    }, 500);
}

// adding scroll event
window.addEventListener('scroll', () => {
    if (blockScrollEvent) {
        return; // Exit early if scroll event is blocked
    } else {
        detectDirection();
        blockScrollEvent = true;
        setTimeout(() => {
            blockScrollEvent = false;
        }, 500); // unblocks Scroll event after unit MS
    }
});