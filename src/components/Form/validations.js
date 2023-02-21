const validations = {
  name: {
    required: true,
    min: 6,
    max: 10,
    pattern: /^[A-Za-z]+$/i
  },
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  },
  phone: {
    pattern: /^(?:\+94|0)?(?:7(?:[0125678]\d{7}|9\d{8})|\d{9})$/
  }
}

export default validations