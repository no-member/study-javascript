const email = null;

const err = new Error('invalid email');

function validateEmail(email) {
    return email.match(/@/) ?
        email : `${err}: ${email}`;
}

try {
    const validatedEmail = validateEmail(email);
    if (validatedEmail instanceof Error) {
        console.error(`Error: ${validatedEmail.message}`);
    } else {
        console.log(`Valid email : ${validatedEmail}`);
    }
} catch (err) {
    console.error(`Error: ${err.message}`);
}