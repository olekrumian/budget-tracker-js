const amount = document.querySelector('.amount')
const addBtn = document.querySelector('.add-btn')
const spendWrapper = document.querySelector('.spend-wrapper')
const apendArrow = document.querySelector('.spend-arrow')

for (let i = 0; i < localStorage.length; i++) {
  const keyName = localStorage.key(i)
  console.log(keyName)
  amount.textContent = `₴${localStorage.getItem(keyName)}`
}

addBtn.addEventListener('click', () => {
  spendWrapper.style.top = '0'
})
apendArrow.addEventListener('click', () => {
  spendWrapper.style.top = '100vh'
})
