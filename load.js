// A bad HTTP response code (404) was received when fetching the script.

// Failed to load resource: net::ERR_INVALID_RESPONSE

// Registration failed TypeError: Failed to register a ServiceWorker: A 
// bad HTTP response code (404) was received when fetching the script.

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js', { scope:'./' })
            .then((registration) => {
                console.log('Registration completed successfully',registration);
            })
            .catch((error) => {
                console.log('Registration failed', error);
            })
     })}