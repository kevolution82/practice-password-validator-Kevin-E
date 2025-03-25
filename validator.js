const readlineSync = require('readline-sync');

// Helper function to check password requirements
function isValidPassword(password) {
    let hasUppercase = false;
    let hasNumber = false;

    if (password.length < 8) {
        return false;
    }

    for (let char of password) {
        if (!hasUppercase && char === char.toUpperCase() && isNaN(char)) {
            hasUppercase = true;
        }
        if (!hasNumber && !isNaN(char)) {
            hasNumber = true;
        }
    }

    return hasUppercase && hasNumber;
}

// Prompt the user until they enter a valid password
let password;
do {
    password = readlineSync.question("Enter your password: ");

    if (isValidPassword(password)) {
        console.log("✅ Password accepted!");
    } else {
        console.log("❌ Password must be at least 8 characters long, contain at least one uppercase letter, and one number.");
    }

} while (!isValidPassword(password));
