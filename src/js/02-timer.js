import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix'

const inputEl = document.querySelector('#datetime-picker')
const btnStart = document.querySelector('[data-start]')
const daysEl = document.querySelector('[data-days]')
const hoursEl = document.querySelector('[data-hours]')
const minutesEl = document.querySelector('[data-minutes]')
const secondsEl = document.querySelector('[data-seconds]')

btnStart.disabled = true
const currentdate = new Date()

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: currentdate,
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= currentdate) {
      Notiflix.Notify.info("Please choose a date in the future")
      btnStart.disabled = true
    } else {
      btnStart.disabled = false
    }
  }
}

flatpickr(inputEl, options)
btnStart.addEventListener('click', onClick)

let time = 0

function onClick() { 
  time = new Date(inputEl.value).getTime()-Date.now()
  const id = setInterval(() => {
    timerDom()
    if (time>=1000) { time -= 1000 }
    else { clearInterval(id)}
   
  }, 1000)
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function timerDom() {   
  let timeobj = convertMs(time)

  daysEl.innerHTML = addLeadingZero(timeobj.days)
  hoursEl.innerHTML = addLeadingZero(timeobj.hours)
  minutesEl.innerHTML = addLeadingZero(timeobj.minutes)
  secondsEl.innerHTML = addLeadingZero(timeobj.seconds)
}

function addLeadingZero(value) {
  return value.toString().padStart(2,'0')
}

