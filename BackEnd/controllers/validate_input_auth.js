function validate_mail_phone(input) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  var phonePattern = /^\d{10}$/;

  if (emailPattern.test(input)) return 1;
  else if (phonePattern.test(input)) return 2;
  else return 3;
}

function validatePassword(password) {
  var passwordPattern = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,}$/i;
  if (passwordPattern.test(password)) return true;
  else return false;
}

function generateID(number) {
  const paddedNumber = String(number).padStart(9, '0');
  return `AS-${paddedNumber}`;
}

module.exports = { validate_mail_phone, validatePassword, generateID };
