function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        const atIndex = email.indexOf("@");
        const dotIndex = email.lastIndexOf(".");
        if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
            return true;
        }
    }
    return false;
}
function validatePhoneNumber(phone) {
    if (phone.length === 10 && !isNaN(phone)) {
        return true;
    }
    return false;
}
console.log(validateEmail("ankit@gmail.com")); 
console.log(validateEmail("invalid-email")); 
console.log(validatePhoneNumber("1234567890")); 
console.log(validatePhoneNumber("12345")); 