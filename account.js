const inputs = document.querySelectorAll('input')
const createAccountBtn = document.querySelector('#createAccount')
const alert = document.querySelector('.alert')

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

//TODO
/* створити функцію яка перевіряє чи є бюджет в localStorage */
//TODO
/* якщо є то виводиться текст з попередженими данимими */
//TODO
/* якщо нема то запинається функиція */
//TODO
/* ствоить функицію яка додає аккаунт з введенимими данимими */
//TODO
/* якщо все працює то редереведить на головну сторінки */

createAccountBtn.addEventListener('click', function (e) {
  e.preventDefault()
  let accountName = inputs[0].value.toLowerCase()
  let amount = inputs[1].value

  if (!accountName) {
    animateWithTimeout(inputs[0])
  } else if (!amount) {
    animateWithTimeout(inputs[1])
  } else {
    if (getLocalStorage(accountName)) {
      console.log('Account already exists')
      const existValue = getLocalStorage(accountName)
      const newItem =
        existValue && typeof existValue === 'string' && existValue.trim() !== ''
          ? JSON.parse(existValue)
          : []

      if (Array.isArray(newItem)) {
        newItem.push(parseInt(amount))
      } else {
        newItem = [parseInt(amount)]
      }

      addToLocalStorage(accountName, JSON.stringify(newItem))
      window.location.href = './main.html'
    } else {
      console.log('Account created')
      addToLocalStorage(accountName, parseInt(amount))
    }
  }
})
