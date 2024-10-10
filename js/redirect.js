// redirect.js

window.onload = function() {
    // Get the full URL path after the domain name
    const path = window.location.pathname;

    // Perform an AJAX request to check if the file exists
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', path, true); // 'HEAD' checks only headers to avoid downloading the whole file

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            // If the status is 404, the file doesn't exist
            if (xhr.status === 404) {
                // Redirect to a specific page if the file doesn't exist
                window.location.href = 'unclaimed'; // Change this to your custom 404 or redirect page
            }
        }
    };

    xhr.send();
};
