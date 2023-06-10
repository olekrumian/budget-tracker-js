const amount = document.querySelector('.amount')
const addBtn = document.querySelector('.add-btn')
const spendWrapper = document.querySelector('.spend-wrapper')
const spendArrow = document.querySelector('.spend-arrow')
const spendBtnWrapper = document.querySelector('.spend-btn-wrapper')
const accAmount = document.querySelector('.add-account-amount')
const localAccountTitle = document.querySelector('.local-account')

const checkLocalStorage = () => {
  if (localStorage.getItem('income')) {
    const income = localStorage.getItem('income')
    const incomeObj = JSON.parse(income)
    amount.innerHTML = `€${incomeObj.amount}`
    accAmount.innerHTML = `€${incomeObj.amount}`
    localAccountTitle.innerHTML = `${incomeObj.description}`
  } else {
    amount.innerHTML = `€0`
    accAmount.innerHTML = `€0`
    localAccountTitle.innerHTML = `No Account Created`
  }
}

window.addEventListener('load', checkLocalStorage)

addBtn.addEventListener('click', () => {
  spendWrapper.style.cssText = 'top: 0vh; z-index: 2;'
})
spendArrow.addEventListener('click', () => {
  spendWrapper.style.top = '100vh'
})
