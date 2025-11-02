// For index.html: Handle the name form
document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const doneBtn = document.getElementById('doneBtn'); // Reference to Done button

    if (nameForm) {
        nameForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop form from reloading page
            const name = nameInput.value.trim();
            if (name) {
                welcomeMessage.textContent = `Hello, ${name}! Ready to learn Python?`;
                nameInput.value = ''; // Clear input
                doneBtn.style.display = 'inline-block'; // Show the Done button
            }
        });
    }

    // For main.html: Handle the original code runner (for print)
    const runBtn = document.getElementById('runBtn');
    const codeInput = document.getElementById('codeInput');
    const output = document.getElementById('output');

    if (runBtn) {
        runBtn.addEventListener('click', function() {
            const code = codeInput.value.trim();
            if (code.startsWith('print(') && code.endsWith(')')) {
                // Simple simulation: extract what's inside print()
                const inside = code.slice(7, -1); // Remove 'print(' and ')'
                // Simulate output (basic: just show the inside as text)
                output.textContent = inside.replace(/['"]/g, ''); // Remove quotes for display
            } else {
                output.textContent = 'Error: Only simple print() statements are supported here. Try: print("Hello")';
            }
        });
    }

    // Handle the variable code runner
    const runVarBtn = document.getElementById('runVarBtn');
    const varCodeInput = document.getElementById('varCodeInput');
    const varOutput = document.getElementById('varOutput');

    if (runVarBtn) {
        runVarBtn.addEventListener('click', function() {
            const code = varCodeInput.value.trim();
            const lines = code.split('\n').map(line => line.trim()).filter(line => line); // Split into lines
            let variable = null; // Simulate one variable
            let printOutput = '';

            for (let line of lines) {
                if (line.includes('=') && !line.includes('print')) {
                    // Simple assignment: e.g., name = "Alice"
                    const parts = line.split('=').map(p => p.trim());
                    if (parts.length === 2) {
                        variable = parts[1].replace(/['"]/g, ''); // Store value without quotes
                    }
                } else if (line.startsWith('print(') && line.endsWith(')')) {
                    // Handle print: e.g., print(name)
                    const inside = line.slice(7, -1).trim();
                    if (inside === 'my_name' || inside === 'name' || inside === 'age') { // Check for our variable
                        printOutput = variable || 'Error: Variable not defined';
                    } else {
                        printOutput = inside.replace(/['"]/g, ''); // Fallback to direct print
                    }
                }
            }

            varOutput.textContent = printOutput || 'Error: Try assigning a variable first, like: my_name = "Alice" then print(my_name)';
        });
    }
});