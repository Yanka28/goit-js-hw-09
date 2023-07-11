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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      Notiflix.Notify.info("Please choose a date in the future")
    } else {
      btnStart.disabled = false
      let ms = selectedDates[0].getTime() - options.defaultDate.getTime()
      btnStart.onclick = function(evt){setInterval(() => {
        convertMs(ms)
        ms -= 1000
      },
        1000)}
      }
    }
  }

const fp = flatpickr(inputEl, options)
 
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  daysEl.innerHTML = days.toString().padStart(2,'0')
  hoursEl.innerHTML = hours.toString().padStart(2,'0')
  minutesEl.innerHTML = minutes.toString().padStart(2,'0')
  secondsEl.innerHTML = seconds.toString().padStart(2,'0')
  return { days, hours, minutes, seconds };
}

