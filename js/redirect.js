// redirect.js

window.onload = function() {
    // Get the full URL path after the domain name
    const path = window.location.pathname;

    // Perform an AJAX request to check if the file exists
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', path, true); // 'HEAD' checks headers only to see if the file exists

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            // If the status is 404, the file doesn't exist
            if (xhr.status === 404) {
                // Redirect to a custom page when the file doesn't exist
                window.location.href = 'unclaimed'; // Change this to your custom redirect page
            }
            // Do nothing if the page exists (status is not 404)
        }
    };

    xhr.send();
};
