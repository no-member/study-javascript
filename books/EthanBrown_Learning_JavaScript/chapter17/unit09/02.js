const messyPhoneNumber = '(505) 555-1515';
const neatPhoneNumber = messyPhoneNumber.replace(/\D/g, '');

console.log(neatPhoneNumber);
