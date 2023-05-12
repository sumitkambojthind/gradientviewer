const grad1 = document.querySelector('.grad1')
const grad2 = document.querySelector('.grad2')
const direction = document.querySelector('.direction')
const body = document.querySelector('.body')
const lastGrad1 = document.querySelector('.grad-save1')
const lastGrad2 = document.querySelector('.grad-save2')
const scale = document.querySelector('.scale')
const saveBtn = document.querySelector('.button')



grad1.addEventListener('change', e=>{
    body.style.backgroundImage = `linear-gradient(${direction.value}, ${grad1.value}, ${grad2.value})`
})


grad2.addEventListener('change', e=>{
    body.style.backgroundImage = `linear-gradient(${direction.value}, ${grad1.value}, ${grad2.value})`
})

direction.addEventListener('change', e=>{
    body.style.backgroundImage = `linear-gradient(${direction.value}, ${grad1.value}, ${grad2.value})`
})
scale.addEventListener('change', e=>{
    body.style.backgroundImage = `linear-gradient(${scale.value}deg, ${grad1.value} 50%, ${grad2.value} 50%)`
})

saveBtn.addEventListener('click', e=>{
    e.preventDefault()
    localStorage.setItem('grad1', grad1.value)
    localStorage.setItem('grad2', grad2.value)
    lastGrad1.style.backgroundColor = localStorage.getItem('grad1')
    lastGrad2.style.backgroundColor = localStorage.getItem('grad2')
})
lastGrad1.style.backgroundColor = localStorage.getItem('grad1')
lastGrad2.style.backgroundColor = localStorage.getItem('grad2')
lastGrad1.textContent = localStorage.getItem('grad1')
lastGrad2.textContent = localStorage.getItem('grad2')