const bodyEl = document.querySelector('body')
const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
let timerId = null;

btnStart.addEventListener('click',  onClStart )
btnStop.addEventListener('click', onClStop)

function stateBtn(boole) { 
  btnStart.disabled = boole
  btnStop.disabled = !boole
}

function onClStart() { 
  stateBtn(true)
  timerId = setInterval(() => { 
    bodyEl.style.backgroundColor = getRandomHexColor()
  }, 1000)
 
}
function onClStop() { 
    stateBtn(false)
    clearInterval(timerId);
    
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
