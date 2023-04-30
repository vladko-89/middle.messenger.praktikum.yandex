export const validateConfig = {
  name: /^[A-ZА-Я]+[a-zа-я]*$/,
  email: /.+@[^@]+[a-z]+\.[^@]{2,}$/,
  phone: /^(\+)?\d{10,15}$/g,
  login: /(?!^\d+$)^[a-zA-Z0-9_-]{3,20}$/,
  password: /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,40}$/
}
