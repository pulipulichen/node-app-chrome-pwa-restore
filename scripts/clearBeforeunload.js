// Clear window.onbeforeunload property
window.onbeforeunload = null;

// If you have added beforeunload event listeners using addEventListener, you can use the following approach
const beforeUnloadEventListeners = []; // Array to keep track of beforeunload event listeners

// Function to add beforeunload event listener and store it in the array
function addBeforeUnloadEventListener(listener) {
    beforeUnloadEventListeners.push(listener);
    window.addEventListener('beforeunload', listener);
}

// Function to remove all beforeunload event listeners
function clearBeforeUnloadEventListeners() {
    for (const listener of beforeUnloadEventListeners) {
        window.removeEventListener('beforeunload', listener);
    }
    beforeUnloadEventListeners.length = 0; // Clear the array
}

// Example usage
addBeforeUnloadEventListener(function(event) {
    event.returnValue = 'Are you sure you want to leave?'; // This will trigger the confirmation prompt
});

// Clear all beforeunload event listeners
clearBeforeUnloadEventListeners();

// Ensure the default handler is null
window.onbeforeunload = null;