// redirect.js

window.onload = function() {
    // Get the full URL path after the domain name
    const path = window.location.pathname;
    
    // Define the allowed pages that exist on your domain
    const allowedPages = ['isis.html', 'index.html', '$.html', 'poisz.html', 'die.html',  'lostinitaly.html', '1dpx.html', 'grim.html', 'purge.html', 'vail.html', 'fame.html', 'terms.html', 'privacy.html',]; // Modify this to your actual pages
    
    // Function to check if a page exists
    function isPageAllowed(pagePath) {
        return allowedPages.includes(pagePath);
    }

    // If the path doesn't match any allowed page, redirect to a different page
    if (!isPageAllowed(path)) {
        // Redirect to the custom page (e.g., 404.html or any other page)
        window.location.href = 'unclaimed.html'; // Change this to your desired redirect page
    }
};
