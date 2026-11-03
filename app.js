// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select the form element
    const contactForm = document.querySelector('form');
    
    // Create or select a message container element for displaying feedback
    let feedbackMessage = document.getElementById('feedback-message');
    
    if (!feedbackMessage) {
        feedbackMessage = document.createElement('p');
        feedbackMessage.id = 'feedback-message';
        feedbackMessage.style.marginTop = '10px';
        feedbackMessage.style.fontWeight = 'bold';
        // Insert feedback message below the submit button inside the form
        contactForm.appendChild(feedbackMessage);
    }

    // Intercept form submission
    contactForm.addEventListener('submit', (e) => {
        // Prevent default form submission behavior
        e.preventDefault();

        // Get the value of the message textarea
        const messageInput = document.getElementById('message');
        const messageValue = messageInput ? messageInput.value.trim() : '';

        // Validate that the message contains at least 10 characters
        if (messageValue.length < 10) {
            // If validation fails: display red error message using .textContent
            feedbackMessage.textContent = 'Message must be at least 10 characters long.';
            feedbackMessage.style.color = '#ff4d4d'; // Bright red for visibility on dark theme
        } else {
            // If validation succeeds: display green success message and reset form
            feedbackMessage.textContent = 'Thank you! Your message has been sent successfully.';
            feedbackMessage.style.color = '#28a745'; // Green success message
            
            // Clear the form fields using .reset()
            contactForm.reset();
        }
    });
});