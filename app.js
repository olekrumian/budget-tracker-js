const amount = document.querySelector('.amount')
const addBtn = document.querySelector('.add-btn')
const spendWrapper = document.querySelector('.spend-wrapper')
const spendArrow = document.querySelector('.spend-arrow')
const spendBtnWrapper = document.querySelector('.spend-btn-wrapper')

const income = localStorage.getItem('income')
const incomeObj = JSON.parse(income)
amount.innerHTML = `₴${incomeObj.amount}`

addBtn.addEventListener('click', () => {
  spendWrapper.style.cssText = 'top: 0vh; z-index: 2;'
})
spendArrow.addEventListener('click', () => {
  spendWrapper.style.top = '100vh'
})
