const amount = document.querySelector('.amount')
const addBtn = document.querySelectorAll('.add-btn')
const spendWrapper = document.querySelector('.spend-wrapper')
const spendArrow = document.querySelectorAll('.spend-arrow')
const spendBtnWrapper = document.querySelector('.spend-btn-wrapper')
const spendCategoryWrapper = document.querySelector('.spend-category-wrapper')
const accAmount = document.querySelector('.add-account-amount')
const localAccountTitle = document.querySelector('.local-account')
const newAccount = document.querySelector('#addAccount')
const newAccountModal = document.querySelector('.add-new-account-modal')

const addBtnNew = document.querySelector('.btn-100')
const addCategory = document.getElementById('addCategory')

const checkLocalStorage = () => {
  const income = localStorage.getItem('income')

  if (income) {
    const incomeObj = JSON.parse(income)
    amount.innerHTML = `₴ ${incomeObj.amount}`
    accAmount.innerHTML = `₴ ${incomeObj.amount}`
  } else {
    amount.innerHTML = `₴0`
    accAmount.innerHTML = `₴0`
    localAccountTitle.innerHTML = `NoAccount`
  }
}

window.addEventListener('load', checkLocalStorage)

addBtn[0].addEventListener('click', () => {
  spendWrapper.style.cssText = 'top: 0vh; z-index: 2;'
})

addBtn[1].addEventListener('click', () => {
  spendWrapper.style.cssText = 'top: 100vh; z-index: 2;'
})

spendArrow.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.classList.contains('spend-arrow-back')) {
      spendWrapper.style.top = '100vh'
    } else {
      newAccountModal.style.display = 'none'
    }
  })
})

addCategory.addEventListener('click', () => {
  console.log('done')
})
newAccount.addEventListener('click', () => {
  console.log('done')
  newAccountModal.style.display = 'block'
})

function addToLocalStorage(e) {
  // Check which account-checkbox is checked
  const accountCheckboxes = document.querySelectorAll(
    '.spend-account-select .styled-checkbox'
  )
  let selectedAccount = ''
  accountCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedAccount = checkbox.id
    }
  })

  // Check which spend-category-wrapper checkbox is checked
  const categoryCheckboxes = document.querySelectorAll(
    '.spend-category-wrapper .styled-checkbox'
  )
  let selectedCategory = ''
  categoryCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedCategory = checkbox.id
    }
  })

  // Get data from spend-form inputs
  const comment = document.querySelector('.spend-form input[name="Name"]').value
  const amount = document.querySelector(
    '.spend-form input[name="Amount"]'
  ).value

  // Create a new data object with the current date/time
  function generateId() {
    const timestamp = Date.now().toString(16)
    const randomString = Math.random().toString(16).substring(2, 10)
    const id = timestamp + randomString
    return id
  }

  function getCurrentDate() {
    const today = new Date()
    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const year = String(today.getFullYear()).slice(-2)

    return `${day}/${month}/${year}`
  }
  const data = {
    account: selectedAccount,
    category: selectedCategory,
    comment: comment,
    amount: amount,
    id: generateId(),
    time: getCurrentDate(),
  }

  // Retrieve existing data from localStorage or create an empty array
  const storedData = localStorage.getItem('spendData')
  let dataArray = []
  if (storedData) {
    dataArray = JSON.parse(storedData)
  }

  // Add the new data entry to the array
  dataArray.push(data)

  // Convert the array to JSON
  const jsonData = JSON.stringify(dataArray)

  // Store the updated array in localStorage
  localStorage.setItem('spendData', jsonData)
  window.location.reload()
}

addBtnNew.addEventListener('click', () => addToLocalStorage())
