const validateRequired = (req, res, next) => {
  let requiredFields = ['firstName', 'lastName', 'email', 'password', 'mobileNo'];
  const email = 'email';
  const password = 'password';

  if (!req.body[email] || !req.body[password]) {
    res.send({ success: false, message: 'Please Fill Require Fields' })
  }
  next();
}


module.exports = validateRequired;