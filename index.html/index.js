document.addEventListener('DOMContentLoaded', function() {
    // Declare variables here (after DOM is loaded)
    const Btn2 = document.getElementById('doneBtn');  // Reference to the "Done" button
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const messageDiv = document.getElementById('welcomeMessage');
    
    // Optional: Use Btn2 for something (e.g., log when clicked)
    if (Btn2) {
        Btn2.addEventListener('click', function() {
            console.log('Done button clicked!');  // For testing
        });
    } else {
        console.error('Button with ID "doneBtn" not found!');
    }
    
    // Attach submit event to the form
    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent page reload
        
        const name = nameInput.value.trim();
        
        if (name) {
            messageDiv.textContent = `Welcome, ${name}!`;
            
            // Show the Done button centered below submit
            if (Btn2) {
                Btn2.style.display = 'block';  // Make it visible and centered
            }
        } else {
            messageDiv.textContent = 'Please enter your name.';
            // the button is hidden if theres no name
        }
    });
});