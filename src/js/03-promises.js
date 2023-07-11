import Notiflix from 'notiflix'

const formEl = document.querySelector('.form')
formEl.addEventListener('input', onInput)
formEl.addEventListener('submit', onSubmit)

let formArr = []
 
function onInput(e) {
    formArr[e.target.name] = Number(e.target.value)
}
 
function createPromise(position, delay) {
   const shouldResolve = Math.random() > 0.3;
   const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
      resolve({position, delay});
    } else {
      reject({position, delay});
    }
  },delay)
})
  return promise
}

function onSubmit(event) {
    event.preventDefault()
    let delay = formArr.delay
    const step = formArr.step
    const amount = formArr.amount
      for (let i = 0; i < amount; i += 1){
      let time = delay + i*step
        createPromise(i+1, time)
           .then(({ position, delay }) => {           
           Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);  
  })
          .catch(({ position, delay }) => {
           Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);            
  })
  }
}
    

  
