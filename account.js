const inputs = document.querySelectorAll('input')
const createAccountBtn = document.querySelector('#createAccount')
const alert = document.querySelector('.alert')

function time() {
  const date = new Date()
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  const day = date.toLocaleDateString('UK', options)
  return day
}

function generateId() {
  const timestamp = Date.now().toString(16)
  const randomString = Math.random().toString(16).substring(2, 10)
  const id = timestamp + randomString
  return id
}

const getLocalStorage = (name) => {
  return localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : []
}
const addToLocalStorage = (name, amount) => {
  return localStorage.setItem(name, JSON.stringify(amount))
}

function animateWithTimeout(element) {
  element.classList.add('shake')

  setTimeout(function () {
    element.classList.remove('shake')
  }, 820)
}

createAccountBtn.addEventListener('click', function (e) {
  e.preventDefault()
  let accountName = inputs[0].value.toLowerCase()
  let amount = inputs[1].value

  const budget = {
    amount: amount,
    description: accountName,
    createsAd: time(),
    id: generateId(),
  }

  const obj = JSON.stringify(budget)
  console.log(obj)

  if (!accountName) {
    animateWithTimeout(inputs[0])
  } else if (!amount) {
    animateWithTimeout(inputs[1])
  } else {
    if (localStorage.getItem(accountName)) {
      const existingValue = localStorage.getItem(accountName)
      const amountCalc = existingValue
        ? parseFloat(existingValue) + parseFloat(amount)
        : amount
      localStorage.setItem(accountName, amountCalc)
      // window.location.href = './main.html'
    } else {
      localStorage.setItem(accountName, amount)
    }
  }
})
