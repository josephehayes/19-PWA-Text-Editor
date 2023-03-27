const butInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    // Store the triggered event
    window.deferredPrompt = event;
    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // Show prompt
    promptEvent.prompt();
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    // Toggle the install button visibility.
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    // Clear deferredPrompt
    window.deferredPrompt = null;
    // Hide the install button
    butInstall.classList.toggle('hidden', true);
}); 