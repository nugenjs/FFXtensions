// // Scroll down function
// function scrollDown() {
//     window.scrollTo(0, document.body.scrollHeight);
// }

// // Listen for page load event
// console.log("Listening for page load.");
// window.addEventListener("load", function () {
//     console.log("Page loaded.");
//     // Scroll down after a small delay to allow content to load
//     setTimeout(scrollDown, 1000);
// });

// // Listen for DOMContentLoaded event
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("DOM content loaded.")
//     // Scroll down after a small delay to allow content to load
//     setTimeout(scrollDown, 1000);
// });


// Check if the current domain is youtube.com
if (window.location.hostname === "www.youtube.com") {
    console.log("Youtube detected, running script.")
    const latestSelector = 'yt-chip-cloud-chip-renderer.style-scope:nth-child(1) > yt-formatted-string:nth-child(1)'
    const forYouSelector = 'yt-chip-cloud-chip-renderer.style-scope:nth-child(3) > yt-formatted-string:nth-child(1)'
    let maxChecks = 10;

    // Function to check if an element with ID "123" exists
    function checkElementExists() {
        console.log("Checking for forYou element.")
        if(maxChecks <= 0) {
            console.log("Max checks reached, exiting.")
            return;
        }
        maxChecks--;
        const forYouEl = document.querySelector(forYouSelector)
        if (forYouEl) {
            console.log("ForYou element found.")
            const latestEl = document.querySelector(latestSelector)
            latestEl.click()
        } else {
            console.log("ForYou element not found, checking again in 500ms.")
            setTimeout(checkElementExists, 500);
        }
    }
    checkElementExists();
}


