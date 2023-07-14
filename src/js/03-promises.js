import Notiflix from 'notiflix'

const formEl = document.querySelector('.form')
formEl.addEventListener('submit', onSubmit)
console.dir(formEl);
 
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
    
  let delay = Number(formEl.elements.delay.value)
  const step = Number(formEl.elements.step.value)
  const amount = Number(formEl.elements.amount.value)
 
      for (let i = 0; i < amount; i += 1){
        let time = delay + i * step
        console.log(time);
        createPromise(i+1, time)
           .then(({ position, delay }) => {           
           Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);  
  })
          .catch(({ position, delay }) => {
           Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);            
  })
  }
}
    

  
