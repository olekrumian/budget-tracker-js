const input = document.querySelectorAll('input')
const btnDone = document.querySelector('.btn')
const alert = document.querySelector('.alert')

const getLocalStorage = (name) => {
  return localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name))
    : []
}
const addToLocalStorage = (name, items, id) => {
  return localStorage.setItem(name, JSON.stringify(items))
}

function animateWithTimeout(element) {
  element.classList.add('shake')

  setTimeout(function () {
    element.classList.remove('shake')
  }, 820)
}

//TODO
// document.addEventListener('DOMContentLoaded', function () {})

btnDone.addEventListener('click', function () {
  let name = input[0].value
  let amount = input[1].value

  if (!name) {
    animateWithTimeout(input[0])
  }
  if (!amount) {
    animateWithTimeout(input[1])
  } else {
    addToLocalStorage(name, amount)
    if (getLocalStorage()) {
      window.location.href = './account.html'
    }
  }
})
