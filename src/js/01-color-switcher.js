const bodyEl = document.querySelector('body')
const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
let timerId = null;

btnStart.addEventListener('click',  onClStart )
btnStop.addEventListener('click', onClStop)


function onClStart() { 
  btnStart.disabled = true
  timerId = setInterval(() => { 
    bodyEl.style.backgroundColor = getRandomHexColor()
  }, 1000)

  btnStop.disabled = false
}
function onClStop() { 
    btnStop.disabled = true
    clearInterval(timerId);
    btnStart.disabled = false
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
