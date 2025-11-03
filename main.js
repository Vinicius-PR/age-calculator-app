const inputContainer = document.querySelector('.input-container')
const dayInput = document.getElementById('days')
const monthInput = document.getElementById('months')
const yearInput = document.getElementById('year')
const form = document.querySelector('.age-form')
const spanErros = document.querySelectorAll('.span-error')
const daysResult = document.querySelector('.result-days')
const monthsResult = document.querySelector('.result-months')
const yearsResult = document.querySelector('.result-years')

function clearErrors() {
  inputContainer.classList.remove('error')
  spanErros.forEach((span) => {
    span.innerHTML = ""
  })
}

function setErros(mesage) {
  inputContainer.classList.add('error')
  spanErros.forEach((span) => {
    span.innerHTML = mesage
  })
  yearsResult.innerHTML = '--'
  monthsResult.innerHTML = '--'
  daysResult.innerHTML = '--'
}

function checkLeapYear(year) {
  const february = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  return [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}

function isAnInvalidDate(year, month, day) {
  const daysInMonth = checkLeapYear(year)

  if (day > daysInMonth[month]) {
    return true
  }
  return false
}

function animate(element, value) {
  const speed = 10;
  let startPoint = 0
  const endPoint = value

  if (value === 0) {
    element.innerText = value
  } else {
    let counter = setInterval(function () {
      ++startPoint
      element.innerText = startPoint

      if (startPoint === endPoint) {
        clearInterval(counter)
      }
    }, speed)
  }
}

function printValuesResult(years, months, days) {
  animate(yearsResult, years)
  animate(monthsResult, months)
  animate(daysResult, days)
}

function dateDiff(birthDate, nowDate) {
  let yearDiff = nowDate.getFullYear() - birthDate.getFullYear();
  let monthDiff = nowDate.getMonth() - birthDate.getMonth();
  let dayDiff = nowDate.getDate() - birthDate.getDate();

  // Adjust the days if it's negative.
  if (dayDiff < 0) {
    /* 
      Get the value of the last day of the previous month. To do this, must:
      1 - set the day value to 0 in the constructor to get previous date. It will return a date object of the last day of the previous month.
      2 - Use getDate() method to get the value of the date. It can be 28, 29, 30 or 31.
    */
    const prevMonth = new Date(nowDate.getFullYear(), nowDate.getMonth(), 0);
    dayDiff += prevMonth.getDate();
    monthDiff--;
  }

  // Adjust the months if it's negative.
  if (monthDiff < 0) {
    monthDiff += 12;
    yearDiff--;
  }

  printValuesResult(yearDiff, monthDiff, dayDiff)
}

function calculateAge() {
  // Have to decrease the month value by 1 because month is 0 based. So it goes from 0 (January) until 11 (Dezember).
  const monthValue = monthInput.value - 1

  // blur method is called to close the keyboard on mobile.
  dayInput.blur()
  monthInput.blur()
  yearInput.blur()

  if (isAnInvalidDate(yearInput.value, monthValue, dayInput.value)) {
    setErros("Must be a valid date")
    return
  }

  const birthDate = new Date(yearInput.value, monthValue, dayInput.value)
  const now = new Date()

  if (birthDate > now) {
    setErros("Must be in the past")
  } else {
    clearErrors()
    dateDiff(birthDate, now)
  }
}

dayInput.addEventListener('input', clearErrors)
monthInput.addEventListener('input', clearErrors)
yearInput.addEventListener('input', clearErrors)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  calculateAge()
})