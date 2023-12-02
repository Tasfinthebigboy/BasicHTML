function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("dtc");

link1.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    scrollToElement('#container1');
});

link2.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    scrollToElement('#container');
});

dtc.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the link
    scrollToElement('#container');
});

